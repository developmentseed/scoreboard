/**
 * Test the OSMESA service code
 */
const test = require('ava')
const path = require('path')

const osmesa = require('../../src/services/osmesa')
const db = require('../../src/db/connection')
const { T } = require('ramda')
const { DateTime, Duration } = require('luxon')

const dbDirectory = path.join(__dirname, '..', '..', 'src', 'db')
const migrationsDirectory = path.join(dbDirectory, 'migrations')
const seedsDirectory = path.join(dbDirectory, 'seeds', 'test')


test.before(async t => {
  await db.migrate.latest({ directory: migrationsDirectory })
  await db.seed.run({ directory: seedsDirectory })
})

test.after.always(async t => {
  await db.destroy()
})

test.serial('get country', async t => {
  const country = await osmesa.getCountry('AGO')
  t.true(country && country.name === 'Angola')
})

test.serial('get user', async t => {
  const user = await osmesa.getUser(19239)
  t.true(user && user.name === 'ebrelsford')
})

test.serial('get campaign', async t => {
  const campaign = await osmesa.getCampaign('osmus-tasks-153')
  t.truthy(campaign && campaign.tag)
})

test.serial('get updates', async t => {
  const lastUpdated = await osmesa.getUpdates()
  t.truthy(lastUpdated)
})

test.serial('get team stats', async t => {
  // these osmIds are not on a team actually, but the getTeamStats() just
  // takes a list of osmIds which could also be the team members.
  const osmIds = [33757, 19239]
  const stats = await osmesa.getTeamStats(osmIds)
  const { teamStats, memberStats } = stats
  t.is(memberStats.length, 2)
  const memberNames = memberStats.map(data => data.name)
  t.true(memberNames.includes('Minh Nguyen'))
  t.true(memberNames.includes('ebrelsford'))

  const integerCheck = Number.isInteger
  const floatCheck = x => typeof x === 'number'

  const expectedTeamStats = {
    buildings_add: integerCheck,
    buildings_del: integerCheck,
    buildings_mod: integerCheck,
    changeset_count: integerCheck,
    coastlines_add: integerCheck,
    coastlines_del: integerCheck,
    coastlines_mod: integerCheck,
    countryCount: integerCheck,
    edit_count: integerCheck,
    km_coastlines_add: floatCheck,
    km_coastlines_del: floatCheck,
    km_coastlines_mod: floatCheck,
    km_railways_add: floatCheck,
    km_railways_del: floatCheck,
    km_railways_mod: floatCheck,
    km_roads_add: floatCheck,
    km_roads_del: floatCheck,
    km_roads_mod: floatCheck,
    km_waterways_add: floatCheck,
    km_waterways_del: floatCheck,
    km_waterways_mod: floatCheck,
    poi_add: integerCheck,
    poi_del: integerCheck,
    poi_mod: integerCheck,
    railways_add: integerCheck,
    railways_del: integerCheck,
    railways_mod: integerCheck,
    roads_add: integerCheck,
    roads_del: integerCheck,
    roads_mod: integerCheck,
    waterways_add: integerCheck,
    waterways_del: integerCheck,
    waterways_mod: integerCheck
  }
  Object.keys(expectedTeamStats).forEach(k => {
    const predicate = expectedTeamStats[k]
    t.true(predicate(teamStats[k]), `unexpected ${k}`)
  })
})

test.serial('validate timeseries accuracy', async t => {
  const buildRangeQuery = (
    start = '2018-01-01 00:00:00.000 -04:00',
    end = '2020-01-01 00:00:00.000 -04:00',
    users = [33757,19239,4732]
  ) => {
    return `
    with range_changesets as (
      select * from changesets
      where
          created_at >= '${start}' :: timestamp
          and created_at < '${end}' :: timestamp
          and user_id in (${users.join(',')})
    ),
    general as (
        select
            range_changesets.user_id,
            array_agg(distinct range_changesets.id) as changeset_ids,
            count(*) AS changeset_count,
            sum(COALESCE(range_changesets.total_edits, 0)) AS edit_count
        from range_changesets
        group by range_changesets.user_id
    ),
    measurements as (
        select range_changesets.user_id, jsonb_each.key, jsonb_each.value
        from range_changesets
        cross join LATERAL jsonb_each(range_changesets.measurements) jsonb_each(key, value)
    ),
    aggregated_measurements_kv as (
        select
            measurements.user_id,
            measurements.key,
            sum(((measurements.value ->> 0)) :: numeric) AS value
        from measurements
        group by measurements.user_id, measurements.key
    ),
    aggregated_measurements as (
        select
            aggregated_measurements_kv.user_id,
            jsonb_object_agg(aggregated_measurements_kv.key, aggregated_measurements_kv.value) AS measurements
        from aggregated_measurements_kv
        group by aggregated_measurements_kv.user_id
    ),
    counts as (
        select range_changesets.user_id, jsonb_each.key, jsonb_each.value
        from range_changesets
        cross join LATERAL jsonb_each(range_changesets.counts) jsonb_each(key, value)
    ),
    aggregated_counts_kv as (
        select counts.user_id, counts.key, sum(((counts.value ->> 0)) :: numeric) AS value
        from counts
        group by counts.user_id, counts.key
    ),
    aggregated_counts as (
        select aggregated_counts_kv.user_id, jsonb_object_agg(aggregated_counts_kv.key, aggregated_counts_kv.value) AS counts
        from aggregated_counts_kv
        group by aggregated_counts_kv.user_id
    )

    SELECT general.user_id, users.name,
          coalesce(aggregated_measurements.measurements,'{}' :: jsonb) as measurements,
          coalesce(aggregated_counts.counts, '{}' :: jsonb) as counts,
          general.changeset_count,
          general.edit_count
    FROM general join aggregated_measurements on aggregated_measurements.user_id = general.user_id
                 join aggregated_counts on aggregated_counts.user_id = general.user_id
                 join users on users.id = general.user_id;
    `
  }

  function getRangeQueryData(start,end) {
    return osmesa.connection().raw(buildRangeQuery(start,end)).then(({rows}) => {
        return { bin_start: start, bin_end: end, rows: rows }
    })
  }
  const [
    timeseriesResult,
    rangeResult,
    binRangeResults
  ] = await Promise.all([
    osmesa.getTimeSeries({
      startDate:DateTime.fromISO('2018-01-01'),
      endDate:DateTime.fromISO('2020-01-01'),
      binInterval: Duration.fromISO('P1Y'),
      userIdsFilter: [33757,19239,4732],
      countriesFilter: [],
      hashtagsFilter: [],
      hashtagPrefixFilter: [],
      categoriesFilter: []
    }),
    getRangeQueryData('2018-01-01 00:00:00.000 -04:00','2020-01-01 00:00:00.000 -04:00'),
    Promise.all([
      getRangeQueryData('2018-01-01 00:00:00.000 -04:00','2019-01-01 00:00:00.000 -04:00'),
      getRangeQueryData('2019-01-01 00:00:00.000 -04:00','2020-01-01 00:00:00.000 -04:00')
    ])
  ])

  // subtract each bins' measurements, counts, changeset_counts, edit_counts with from equivalent in range request.
  // show that result is 0 for counts, changeset_counts, and edit_counts.
  // show for measurements the difference is within a .0000001 'confidence interval'.
  // either because of node's floating point numbers or something in the sql aggregation functions there can be a small
  // in the sum of the bins and the entire range.
  const measurementCountsKeys = rangeResult.rows.reduce((map,r) => {
    map[r.name] = {
        measurements: Object.assign({}, r.measurements),
        counts:  Object.assign({}, r.counts),
        changeset_count: r.changeset_count,
        edit_count: r.edit_count
    }
    return map;
  }, {})

  timeseriesResult.forEach(row => {
    Object.keys(row.measurements).forEach(m => {
        measurementCountsKeys[row.name].measurements[m] -= row.measurements[m]
    })
    Object.keys(row.counts).forEach(m => {
        measurementCountsKeys[row.name].counts[m] -= row.counts[m]
    })
    measurementCountsKeys[row.name].changeset_count -= row.changeset_count
    measurementCountsKeys[row.name].edit_count -= row.edit_count
  })

  Object.keys(measurementCountsKeys).forEach(name => {
    t.true(measurementCountsKeys[name].changeset_count === 0)
    t.true(measurementCountsKeys[name].edit_count === 0)
    Object.keys(measurementCountsKeys[name].counts).forEach(k => t.true(measurementCountsKeys[name].counts[k] === 0))
    Object.keys(measurementCountsKeys[name].measurements).forEach(k => t.true(Math.abs(measurementCountsKeys[name].measurements[k]) < 0.0000001))
  })

  // next show that results from timeseries query and running individual queries on bins' ranges are equal.
  // do this with same subtraction equals 0 check.
  // also validate that repored measurements/counts are the same by showing the keys in the jsonb are the same.
  const timeseriesWalkable = timeseriesResult.reduce((map, r) => {
    if (!map.hasOwnProperty(r.name)) {
        map[r.name] = {}
    }

    map[r.name][r.bin_start] = r;
    return map;
  }, {})

  binRangeResults.forEach(bin => {
    bin.rows.forEach(r => {
      const timeseriesMatch = timeseriesWalkable[r.name][bin.bin_start.split(' ')[0]] // bin_start here is full iso. timesereies bintimesereies

      const rowMeasurementKeys = Object.keys(r.measurements);
      const timeseriesMeasurementKeys = Object.keys(timeseriesMatch.measurements);

      const rowCountsKeys = Object.keys(r.counts);
      const timeseriesCountsKeys = Object.keys(timeseriesMatch.counts);


      t.true(rowMeasurementKeys.length === timeseriesMeasurementKeys.length)
      t.true(rowCountsKeys.length === timeseriesCountsKeys.length)
      t.true(rowMeasurementKeys.sort().join(',') === timeseriesMeasurementKeys.sort().join(','))
      t.true(rowCountsKeys.sort().join(',') === timeseriesCountsKeys.sort().join(','))

      rowMeasurementKeys.forEach(key => t.true((r.measurements[key] - timeseriesMatch.measurements[key]) === 0));

      rowCountsKeys.forEach(key => t.true((r.counts[key] - timeseriesMatch.counts[key]) === 0));

      t.true((r.changeset_count - timeseriesMatch.changeset_count) === 0);
      t.true((r.edit_count - timeseriesMatch.edit_count) === 0);
    })
  })
})