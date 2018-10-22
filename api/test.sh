if [ -z "$CI" ]; then
    docker-compose exec db createdb -U postgres scoreboard_tests
    NODE_ENV=test nf start migrate_db --env test
    NODE_ENV=test nf start seed_db --env test
    NODE_ENV=test ava tests/*.test.js
    docker-compose exec db dropdb -U postgres scoreboard_tests
else
    NODE_ENV=test nf start migrate_db --env test
    NODE_ENV=test nf start seed_db --env test
    ava tests/*.test.js
fi
