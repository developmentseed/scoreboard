if [ -z "$CI" ]; then
    ./src/db/scripts/create-database.sh && 
    ava tests/*.test.js ; 
    ./src/db/scripts/drop-database.sh 
else
    ava tests/*.test.js
fi
