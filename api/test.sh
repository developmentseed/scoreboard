if [ -z "$CI" ]; then
    createdb -p 5433 scoreboard_tests
    cd src/db && node_modules/.bin/knex migrate:latest && cd ../..
    yarn seed
    ava tests/*.test.js
    dropdb  -p 5433 scoreboard_tests
else
    node_modules/.bin/knex migrate:latest
    yarn seed
    ava tests/*.test.js
fi
