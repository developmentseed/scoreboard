# OSM Scoreboard 🗺 🎯

[![CircleCI](https://circleci.com/gh/developmentseed/scoreboard.svg?style=svg&circle-token=ed8258ed33b6860d7fd496bddb56863678d8fe98)](https://circleci.com/gh/developmentseed/scoreboard)

A project to display OSM user contribution metrics and campaign metrics.

- `api`: source to the API as well as processes to grab data from various OSM sources.
- `frontend`: source to the frontend application.
- `deployment`: deployment guides

## 🔨 Development

### Dependencies
- Node 8.4
- Sqlite3

### Env file

There should be an env file in `/api` with the following environment variables

```
NODE_ENV=staging
TM_URL=https://tasking-manager-url
USERS_URL=https://link-to-users.csv
TM_HASHTAG=tasking-manager-prefix
OSMESA_API=https://link-to-osmesa-api
API_URL=http://localhost:3000
FILTERED_USERS='0,1,2'
```

- NODE_ENV: The configuration to use, "staging", "development" or "production"
- TM_URL: The URL of the tasking manager to scrape
- TM_HASHTAG: The default prefix the tasking manager uses as a hashtag (e.g. "osmus-project")
- USERS_URL: URL to a csv that contains the users for OSM joined with country information, check the database schema for more information
- OSMESA_API: URL to the OSMESA http server that serves out statistics
- API_URL: URL where this API will be hosted
- FILTERED_USERS: Comma separated user list, to filter import users

### Running locally

```
npm install
cd api
npm run clocks
cd ..
npm start
```

Note: before running the above commands, you must replace api/.env.sample with your own api/.env file containing the correct URL values.

#### Dependencies

To set the Node version as specified above:
```
brew install nvm
nvm use
```
To install SQLite3 on Mac OS X:
```
brew install sqlite3
```

See [this tutorial](https://www.tutorialspoint.com/sqlite/sqlite_installation.htm) for more details and instructions for installing SQLite3 on other operating systems.