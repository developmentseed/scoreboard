#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE scoreboard_test;
  CREATE ROLE scoreboard_test WITH LOGIN PASSWORD 'test';
  GRANT ALL PRIVILEGES ON DATABASE "scoreboard_test" TO scoreboard_test;
EOSQL
