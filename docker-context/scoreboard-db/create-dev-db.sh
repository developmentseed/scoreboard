#!/bin/bash
set -e

POSTGRES_USER=${1:-postgres}

psql $POSTGRES_USER -v ON_ERROR_STOP=1 <<-EOSQL
  CREATE DATABASE scoreboard;
  CREATE ROLE scoreboard WITH ENCRYPTED PASSWORD 'test';
  GRANT ALL PRIVILEGES ON DATABASE "scoreboard" TO "scoreboard";
  ALTER ROLE "scoreboard" WITH LOGIN;
EOSQL
