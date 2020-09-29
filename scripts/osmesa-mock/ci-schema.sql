-- this is the beginning and end of init.sql, basically just the schema so that tests can run in CI.

--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2 (Debian 11.2-1.pgdg90+1)
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP MATERIALIZED VIEW IF EXISTS public.user_statistics;
DROP TABLE IF EXISTS public.refreshments;
DROP MATERIALIZED VIEW IF EXISTS public.hashtag_user_statistics;
DROP TABLE IF EXISTS public.users;
DROP MATERIALIZED VIEW IF EXISTS public.hashtag_statistics;
DROP MATERIALIZED VIEW IF EXISTS public.country_statistics;
DROP TABLE IF EXISTS public.hashtags;
DROP TABLE IF EXISTS public.countries;
DROP TABLE IF EXISTS public.checkpoints;
DROP TABLE IF EXISTS public.changesets_hashtags;
DROP TABLE IF EXISTS public.changesets_countries;
DROP TABLE IF EXISTS public.changesets;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- Name: changesets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.changesets (
    id bigint NOT NULL,
    measurements jsonb,
    counts jsonb,
    total_edits integer,
    editor text,
    user_id integer,
    created_at timestamp with time zone,
    closed_at timestamp with time zone,
    augmented_diffs integer[],
    updated_at timestamp with time zone
);


ALTER TABLE public.changesets OWNER TO postgres;

--
-- Name: changesets_countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.changesets_countries (
    changeset_id integer NOT NULL,
    country_id integer NOT NULL,
    edit_count integer NOT NULL,
    augmented_diffs integer[]
);


ALTER TABLE public.changesets_countries OWNER TO postgres;

--
-- Name: changesets_hashtags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.changesets_hashtags (
    changeset_id integer NOT NULL,
    hashtag_id integer NOT NULL
);


ALTER TABLE public.changesets_hashtags OWNER TO postgres;

--
-- Name: checkpoints; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.checkpoints (
    proc_name text NOT NULL,
    sequence integer NOT NULL
);


ALTER TABLE public.checkpoints OWNER TO postgres;

--
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    name text,
    code text NOT NULL
);


ALTER TABLE public.countries OWNER TO postgres;

--
-- Name: hashtags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hashtags (
    id integer NOT NULL,
    hashtag text NOT NULL
);


ALTER TABLE public.hashtags OWNER TO postgres;

--
-- Name: country_statistics; Type: MATERIALIZED VIEW; Schema: public; Owner: postgres
--

CREATE MATERIALIZED VIEW public.country_statistics AS
 WITH changesets AS (
         SELECT changesets.id,
            changesets.measurements,
            changesets.counts,
            changesets.total_edits,
            changesets.editor,
            changesets.user_id,
            changesets.created_at,
            changesets.closed_at,
            changesets.augmented_diffs,
            changesets.updated_at
           FROM public.changesets
          WHERE (changesets.user_id > 1)
        ), general AS (
         SELECT changesets_countries.country_id,
            max(COALESCE(changesets.closed_at, changesets.created_at)) AS last_edit,
            count(*) AS changeset_count,
            sum(COALESCE(changesets_countries.edit_count, 0)) AS edit_count,
            max(changesets.updated_at) AS updated_at
           FROM (changesets
             JOIN public.changesets_countries ON ((changesets.id = changesets_countries.changeset_id)))
          GROUP BY changesets_countries.country_id
        ), processed_changesets AS (
         SELECT changesets.id,
            changesets.user_id,
            changesets_countries.country_id,
            changesets.measurements,
            changesets.counts,
            changesets_countries.edit_count
           FROM (changesets
             JOIN public.changesets_countries ON ((changesets.id = changesets_countries.changeset_id)))
        ), hashtag_counts AS (
         SELECT rank() OVER (PARTITION BY processed_changesets.country_id ORDER BY (sum(COALESCE(processed_changesets.edit_count, 0))) DESC) AS rank,
            processed_changesets.country_id,
            hashtags_1.hashtag,
            count(*) AS changesets,
            sum(COALESCE(processed_changesets.edit_count, 0)) AS edits
           FROM ((processed_changesets
             JOIN public.changesets_hashtags ON ((processed_changesets.id = changesets_hashtags.changeset_id)))
             JOIN public.hashtags hashtags_1 ON ((changesets_hashtags.hashtag_id = hashtags_1.id)))
          GROUP BY processed_changesets.country_id, hashtags_1.hashtag
        ), hashtags AS (
         SELECT hashtag_counts.country_id,
            jsonb_object_agg(hashtag_counts.hashtag, hashtag_counts.changesets) AS hashtag_changesets,
            jsonb_object_agg(hashtag_counts.hashtag, hashtag_counts.edits) AS hashtag_edits
           FROM hashtag_counts
          WHERE (hashtag_counts.rank <= 10)
          GROUP BY hashtag_counts.country_id
        ), user_counts AS (
         SELECT rank() OVER (PARTITION BY processed_changesets.country_id ORDER BY (sum(COALESCE(processed_changesets.edit_count, 0))) DESC) AS rank,
            processed_changesets.country_id,
            processed_changesets.user_id,
            count(*) AS changesets,
            sum(COALESCE(processed_changesets.edit_count, 0)) AS edits
           FROM processed_changesets
          GROUP BY processed_changesets.country_id, processed_changesets.user_id
        ), users AS (
         SELECT user_counts.country_id,
            jsonb_object_agg(user_counts.user_id, user_counts.changesets) AS user_changesets,
            jsonb_object_agg(user_counts.user_id, user_counts.edits) AS user_edits
           FROM user_counts
          WHERE (user_counts.rank <= 10)
          GROUP BY user_counts.country_id
        ), measurements AS (
         SELECT processed_changesets.id,
            processed_changesets.country_id,
            jsonb_each.key,
            jsonb_each.value
           FROM (processed_changesets
             CROSS JOIN LATERAL jsonb_each(processed_changesets.measurements) jsonb_each(key, value))
        ), aggregated_measurements_kv AS (
         SELECT measurements.country_id,
            measurements.key,
            sum(((measurements.value ->> 0))::numeric) AS value
           FROM measurements
          GROUP BY measurements.country_id, measurements.key
        ), aggregated_measurements AS (
         SELECT aggregated_measurements_kv.country_id,
            jsonb_object_agg(aggregated_measurements_kv.key, aggregated_measurements_kv.value) AS measurements
           FROM aggregated_measurements_kv
          GROUP BY aggregated_measurements_kv.country_id
        ), counts AS (
         SELECT processed_changesets.id,
            processed_changesets.country_id,
            jsonb_each.key,
            jsonb_each.value
           FROM (processed_changesets
             CROSS JOIN LATERAL jsonb_each(processed_changesets.counts) jsonb_each(key, value))
        ), aggregated_counts_kv AS (
         SELECT counts.country_id,
            counts.key,
            sum(((counts.value ->> 0))::numeric) AS value
           FROM counts
          GROUP BY counts.country_id, counts.key
        ), aggregated_counts AS (
         SELECT aggregated_counts_kv.country_id,
            jsonb_object_agg(aggregated_counts_kv.key, aggregated_counts_kv.value) AS counts
           FROM aggregated_counts_kv
          GROUP BY aggregated_counts_kv.country_id
        )
 SELECT general.country_id,
    countries.name AS country_name,
    countries.code AS country_code,
    aggregated_measurements.measurements,
    aggregated_counts.counts,
    general.changeset_count,
    general.edit_count,
    general.last_edit,
    general.updated_at,
    users.user_changesets,
    users.user_edits,
    hashtags.hashtag_changesets,
    hashtags.hashtag_edits
   FROM (((((general
     JOIN public.countries ON ((general.country_id = countries.id)))
     LEFT JOIN users USING (country_id))
     LEFT JOIN hashtags USING (country_id))
     LEFT JOIN aggregated_measurements USING (country_id))
     LEFT JOIN aggregated_counts USING (country_id))
  WITH NO DATA;


ALTER TABLE public.country_statistics OWNER TO postgres;

--
-- Name: hashtag_statistics; Type: MATERIALIZED VIEW; Schema: public; Owner: postgres
--

CREATE MATERIALIZED VIEW public.hashtag_statistics AS
 WITH general AS (
         SELECT changesets_hashtags.hashtag_id,
            max(COALESCE(changesets.closed_at, changesets.created_at)) AS last_edit,
            count(*) AS changeset_count,
            sum(COALESCE(changesets.total_edits, 0)) AS edit_count,
            max(changesets.updated_at) AS updated_at
           FROM (public.changesets
             JOIN public.changesets_hashtags ON ((changesets.id = changesets_hashtags.changeset_id)))
          GROUP BY changesets_hashtags.hashtag_id
        ), processed_changesets AS (
         SELECT changesets.id,
            changesets.user_id,
            changesets_hashtags.hashtag_id,
            changesets.measurements,
            changesets.counts,
            changesets.total_edits
           FROM (public.changesets
             JOIN public.changesets_hashtags ON ((changesets.id = changesets_hashtags.changeset_id)))
        ), user_counts AS (
         SELECT rank() OVER (PARTITION BY processed_changesets.hashtag_id ORDER BY (sum(COALESCE(processed_changesets.total_edits, 0))) DESC) AS rank,
            processed_changesets.hashtag_id,
            processed_changesets.user_id,
            count(*) AS changesets,
            sum(COALESCE(processed_changesets.total_edits, 0)) AS edit_count
           FROM processed_changesets
          GROUP BY processed_changesets.hashtag_id, processed_changesets.user_id
        ), users AS (
         SELECT user_counts.hashtag_id,
            jsonb_object_agg(user_counts.user_id, user_counts.changesets) AS user_changesets,
            jsonb_object_agg(user_counts.user_id, user_counts.edit_count) AS user_edits
           FROM user_counts
          WHERE (user_counts.rank <= 10)
          GROUP BY user_counts.hashtag_id
        ), measurements AS (
         SELECT processed_changesets.id,
            processed_changesets.hashtag_id,
            jsonb_each.key,
            jsonb_each.value
           FROM (processed_changesets
             CROSS JOIN LATERAL jsonb_each(processed_changesets.measurements) jsonb_each(key, value))
        ), aggregated_measurements_kv AS (
         SELECT measurements.hashtag_id,
            measurements.key,
            sum(((measurements.value ->> 0))::numeric) AS value
           FROM measurements
          GROUP BY measurements.hashtag_id, measurements.key
        ), aggregated_measurements AS (
         SELECT aggregated_measurements_kv.hashtag_id,
            jsonb_object_agg(aggregated_measurements_kv.key, aggregated_measurements_kv.value) AS measurements
           FROM aggregated_measurements_kv
          GROUP BY aggregated_measurements_kv.hashtag_id
        ), counts AS (
         SELECT processed_changesets.id,
            processed_changesets.hashtag_id,
            jsonb_each.key,
            jsonb_each.value
           FROM (processed_changesets
             CROSS JOIN LATERAL jsonb_each(processed_changesets.counts) jsonb_each(key, value))
        ), aggregated_counts_kv AS (
         SELECT counts.hashtag_id,
            counts.key,
            sum(((counts.value ->> 0))::numeric) AS value
           FROM counts
          GROUP BY counts.hashtag_id, counts.key
        ), aggregated_counts AS (
         SELECT aggregated_counts_kv.hashtag_id,
            jsonb_object_agg(aggregated_counts_kv.key, aggregated_counts_kv.value) AS counts
           FROM aggregated_counts_kv
          GROUP BY aggregated_counts_kv.hashtag_id
        )
 SELECT hashtags.hashtag AS tag,
    general.hashtag_id,
    aggregated_measurements.measurements,
    aggregated_counts.counts,
    general.changeset_count,
    general.edit_count,
    general.last_edit,
    general.updated_at,
    users.user_changesets,
    users.user_edits
   FROM ((((general
     JOIN public.hashtags ON ((general.hashtag_id = hashtags.id)))
     LEFT JOIN users USING (hashtag_id))
     LEFT JOIN aggregated_measurements USING (hashtag_id))
     LEFT JOIN aggregated_counts USING (hashtag_id))
  WITH NO DATA;


ALTER TABLE public.hashtag_statistics OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: hashtag_user_statistics; Type: MATERIALIZED VIEW; Schema: public; Owner: postgres
--

CREATE MATERIALIZED VIEW public.hashtag_user_statistics AS
 WITH general AS (
         SELECT changesets.user_id,
            changesets_hashtags.hashtag_id,
            array_agg(changesets.id) AS changesets,
            max(COALESCE(changesets.closed_at, changesets.created_at)) AS last_edit,
            count(*) AS changeset_count,
            sum(COALESCE(changesets.total_edits, 0)) AS edit_count,
            max(changesets.updated_at) AS updated_at
           FROM (public.changesets
             JOIN public.changesets_hashtags ON ((changesets.id = changesets_hashtags.changeset_id)))
          GROUP BY changesets.user_id, changesets_hashtags.hashtag_id
        ), measurements AS (
         SELECT changesets.id,
            changesets.user_id,
            changesets_hashtags.hashtag_id,
            jsonb_each.key,
            jsonb_each.value
           FROM ((public.changesets
             JOIN public.changesets_hashtags ON ((changesets.id = changesets_hashtags.changeset_id)))
             CROSS JOIN LATERAL jsonb_each(changesets.measurements) jsonb_each(key, value))
        ), aggregated_measurements_kv AS (
         SELECT measurements.user_id,
            measurements.hashtag_id,
            measurements.key,
            sum(((measurements.value ->> 0))::numeric) AS value
           FROM measurements
          GROUP BY measurements.user_id, measurements.hashtag_id, measurements.key
        ), aggregated_measurements AS (
         SELECT aggregated_measurements_kv.user_id,
            aggregated_measurements_kv.hashtag_id,
            jsonb_object_agg(aggregated_measurements_kv.key, aggregated_measurements_kv.value) AS measurements
           FROM aggregated_measurements_kv
          GROUP BY aggregated_measurements_kv.user_id, aggregated_measurements_kv.hashtag_id
        ), counts AS (
         SELECT changesets.id,
            changesets.user_id,
            changesets_hashtags.hashtag_id,
            jsonb_each.key,
            jsonb_each.value
           FROM ((public.changesets
             JOIN public.changesets_hashtags ON ((changesets.id = changesets_hashtags.changeset_id)))
             CROSS JOIN LATERAL jsonb_each(changesets.counts) jsonb_each(key, value))
        ), aggregated_counts_kv AS (
         SELECT counts.user_id,
            counts.hashtag_id,
            counts.key,
            sum(((counts.value ->> 0))::numeric) AS value
           FROM counts
          GROUP BY counts.user_id, counts.hashtag_id, counts.key
        ), aggregated_counts AS (
         SELECT aggregated_counts_kv.user_id,
            aggregated_counts_kv.hashtag_id,
            jsonb_object_agg(aggregated_counts_kv.key, aggregated_counts_kv.value) AS counts
           FROM aggregated_counts_kv
          GROUP BY aggregated_counts_kv.user_id, aggregated_counts_kv.hashtag_id
        )
 SELECT general.user_id,
    users.name,
    general.hashtag_id,
    hashtags.hashtag,
    aggregated_measurements.measurements,
    aggregated_counts.counts,
    general.last_edit,
    general.changeset_count,
    general.edit_count,
    general.updated_at
   FROM ((((general
     LEFT JOIN public.hashtags ON ((general.hashtag_id = hashtags.id)))
     LEFT JOIN aggregated_measurements USING (user_id, hashtag_id))
     LEFT JOIN aggregated_counts USING (user_id, hashtag_id))
     JOIN public.users ON ((general.user_id = users.id)))
  WITH NO DATA;


ALTER TABLE public.hashtag_user_statistics OWNER TO postgres;

--
-- Name: refreshments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.refreshments (
    mat_view text NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.refreshments OWNER TO postgres;

--
-- Name: user_statistics; Type: MATERIALIZED VIEW; Schema: public; Owner: postgres
--

CREATE MATERIALIZED VIEW public.user_statistics AS
 WITH general AS (
         SELECT changesets.user_id,
            array_agg(changesets.id) AS changesets,
            max(COALESCE(changesets.closed_at, changesets.created_at)) AS last_edit,
            count(*) AS changeset_count,
            sum(COALESCE(changesets.total_edits, 0)) AS edit_count,
            max(changesets.updated_at) AS updated_at
           FROM public.changesets
          GROUP BY changesets.user_id
        ), country_counts AS (
         SELECT changesets.user_id,
            countries_1.code,
            count(*) AS changesets,
            sum(COALESCE(changesets.total_edits, 0)) AS edits
           FROM ((public.changesets
             JOIN public.changesets_countries ON ((changesets.id = changesets_countries.changeset_id)))
             JOIN public.countries countries_1 ON ((changesets_countries.country_id = countries_1.id)))
          GROUP BY changesets.user_id, countries_1.code
        ), countries AS (
         SELECT country_counts.user_id,
            jsonb_object_agg(country_counts.code, country_counts.changesets) AS country_changesets,
            jsonb_object_agg(country_counts.code, country_counts.edits) AS country_edits
           FROM country_counts
          GROUP BY country_counts.user_id
        ), edit_day_counts AS (
         SELECT changesets.user_id,
            (date_trunc('day'::text, COALESCE(changesets.closed_at, changesets.created_at)))::date AS day,
            count(*) AS changesets,
            sum(COALESCE(changesets.total_edits, 0)) AS edits
           FROM public.changesets
          WHERE (COALESCE(changesets.closed_at, changesets.created_at) IS NOT NULL)
          GROUP BY changesets.user_id, ((date_trunc('day'::text, COALESCE(changesets.closed_at, changesets.created_at)))::date)
        ), edit_days AS (
         SELECT edit_day_counts.user_id,
            jsonb_object_agg(edit_day_counts.day, edit_day_counts.changesets) AS day_changesets,
            jsonb_object_agg(edit_day_counts.day, edit_day_counts.edits) AS day_edits
           FROM edit_day_counts
          GROUP BY edit_day_counts.user_id
        ), editor_counts AS (
         SELECT rank() OVER (PARTITION BY changesets.user_id ORDER BY (sum(COALESCE(changesets.total_edits, 0))) DESC) AS rank,
            changesets.user_id,
            changesets.editor,
            count(*) AS changesets,
            sum(COALESCE(changesets.total_edits, 0)) AS edits
           FROM public.changesets
          WHERE (changesets.editor IS NOT NULL)
          GROUP BY changesets.user_id, changesets.editor
        ), editors AS (
         SELECT editor_counts.user_id,
            jsonb_object_agg(editor_counts.editor, editor_counts.changesets) AS editor_changesets,
            jsonb_object_agg(editor_counts.editor, editor_counts.edits) AS editor_edits
           FROM editor_counts
          WHERE (editor_counts.rank <= 10)
          GROUP BY editor_counts.user_id
        ), hashtag_counts AS (
         SELECT rank() OVER (PARTITION BY changesets.user_id ORDER BY (sum(COALESCE(changesets.total_edits, 0))) DESC) AS rank,
            changesets.user_id,
            hashtags_1.hashtag,
            count(*) AS changesets,
            sum(COALESCE(changesets.total_edits)) AS edits
           FROM ((public.changesets
             JOIN public.changesets_hashtags ON ((changesets.id = changesets_hashtags.changeset_id)))
             JOIN public.hashtags hashtags_1 ON ((changesets_hashtags.hashtag_id = hashtags_1.id)))
          GROUP BY changesets.user_id, hashtags_1.hashtag
        ), hashtags AS (
         SELECT hashtag_counts.user_id,
            jsonb_object_agg(hashtag_counts.hashtag, hashtag_counts.changesets) AS hashtag_changesets,
            jsonb_object_agg(hashtag_counts.hashtag, hashtag_counts.edits) AS hashtag_edits
           FROM hashtag_counts
          WHERE (hashtag_counts.rank <= 50)
          GROUP BY hashtag_counts.user_id
        ), measurements AS (
         SELECT changesets.id,
            changesets.user_id,
            jsonb_each.key,
            jsonb_each.value
           FROM (public.changesets
             CROSS JOIN LATERAL jsonb_each(changesets.measurements) jsonb_each(key, value))
        ), aggregated_measurements_kv AS (
         SELECT measurements.user_id,
            measurements.key,
            sum(((measurements.value ->> 0))::numeric) AS value
           FROM measurements
          GROUP BY measurements.user_id, measurements.key
        ), aggregated_measurements AS (
         SELECT aggregated_measurements_kv.user_id,
            jsonb_object_agg(aggregated_measurements_kv.key, aggregated_measurements_kv.value) AS measurements
           FROM aggregated_measurements_kv
          GROUP BY aggregated_measurements_kv.user_id
        ), counts AS (
         SELECT changesets.id,
            changesets.user_id,
            jsonb_each.key,
            jsonb_each.value
           FROM (public.changesets
             CROSS JOIN LATERAL jsonb_each(changesets.counts) jsonb_each(key, value))
        ), aggregated_counts_kv AS (
         SELECT counts.user_id,
            counts.key,
            sum(((counts.value ->> 0))::numeric) AS value
           FROM counts
          GROUP BY counts.user_id, counts.key
        ), aggregated_counts AS (
         SELECT aggregated_counts_kv.user_id,
            jsonb_object_agg(aggregated_counts_kv.key, aggregated_counts_kv.value) AS counts
           FROM aggregated_counts_kv
          GROUP BY aggregated_counts_kv.user_id
        )
 SELECT general.user_id AS id,
    users.name,
    aggregated_measurements.measurements,
    aggregated_counts.counts,
    general.last_edit,
    general.changeset_count,
    general.edit_count,
    editors.editor_changesets,
    editors.editor_edits,
    edit_days.day_changesets,
    edit_days.day_edits,
    countries.country_changesets,
    countries.country_edits,
    hashtags.hashtag_changesets,
    hashtags.hashtag_edits,
    general.updated_at
   FROM (((((((general
     LEFT JOIN countries USING (user_id))
     LEFT JOIN editors USING (user_id))
     LEFT JOIN edit_days USING (user_id))
     LEFT JOIN hashtags USING (user_id))
     LEFT JOIN aggregated_measurements USING (user_id))
     LEFT JOIN aggregated_counts USING (user_id))
     JOIN public.users ON ((general.user_id = users.id)))
  WITH NO DATA;


ALTER TABLE public.user_statistics OWNER TO postgres;


--
-- Name: country_statistics; Type: MATERIALIZED VIEW DATA; Schema: public; Owner: postgres
--

REFRESH MATERIALIZED VIEW public.country_statistics;


--
-- Name: hashtag_statistics; Type: MATERIALIZED VIEW DATA; Schema: public; Owner: postgres
--

REFRESH MATERIALIZED VIEW public.hashtag_statistics;


--
-- Name: hashtag_user_statistics; Type: MATERIALIZED VIEW DATA; Schema: public; Owner: postgres
--

REFRESH MATERIALIZED VIEW public.hashtag_user_statistics;


--
-- Name: user_statistics; Type: MATERIALIZED VIEW DATA; Schema: public; Owner: postgres
--

REFRESH MATERIALIZED VIEW public.user_statistics;


--
-- PostgreSQL database dump complete
--


