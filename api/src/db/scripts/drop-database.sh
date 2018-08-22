#!/bin/sh
DATABASE=${1:-scoreboard_tests}
psql -c "drop database ${DATABASE}" -U postgres