#!/bin/sh
DATABASE=${1:-scoreboard_tests}
psql -c "create database $DATABASE" -U postgres