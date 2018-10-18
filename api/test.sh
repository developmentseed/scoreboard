if [ -z "$CI" ]; then
    createdb -p 5433 scoreboard_tests
    node_modules/.bin/knex migrate:latest
    yarn seed
    ava tests/*.test.js
    dropdb  -p 5433 scoreboard_tests
else
    node_modules/.bin/knex migrate:latest
    yarn seed
    ava tests/*.test.js
fi
