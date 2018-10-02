if [ -z "$CI" ]; then
    createdb -p 5433 scoreboard_tests && 
    ava tests/*.test.js ; 
    dropdb  -p 5433 scoreboard_tests
else
    ava tests/*.test.js
fi
