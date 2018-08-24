if [ -z "$CI" ]; then
    createdb scoreboard_tests && 
    ava tests/*.test.js ; 
    dropdb scoreboard_tests
else
    ava tests/*.test.js
fi
