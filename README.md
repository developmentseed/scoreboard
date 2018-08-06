# OSM Scoreboard 🗺 🎯

[![CircleCI](https://circleci.com/gh/developmentseed/scoreboard.svg?style=svg)](https://circleci.com/gh/developmentseed/scoreboard)

A project to display OSM user contribution metrics and campaign metrics.

- `api`: source to the API as well as processes to grab data from various OSM sources.
- `frontend`: source to the frontend application.
- `deployment`: deployment guides for CentOS only

# 🔨 Development

## Dependencies
- Node 8.4
- Sqlite3
- Yarn

To set the Node version as specified above:

     $ brew install nvm
     $ nvm use

To install SQLite3 on Mac OS X:

     $ brew install sqlite3

See [this tutorial](https://www.tutorialspoint.com/sqlite/sqlite_installation.htm) for more details and instructions for installing SQLite3 on other operating systems.

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

| name | description
| ---  | -----
| NODE_ENV | The configuration to use, "staging", "development" or "production"
| TM_URL | The URL of the tasking manager to scrape
| TM_HASHTAG | The default prefix the tasking manager uses as a hashtag (e.g. "osmus-project")
| USERS_URL | URL to a csv that contains the users for OSM joined with country information, check the database schema for more information
| OSMESA_API | URL to the OSMESA http server that serves out statistics
| API_URL | URL where this API will be hosted
| FILTERED_USERS | Comma separated user list, to filter import users

## Installation

We use [lerna](https://github.com/lerna/lerna) for installation and package management

     $ yarn
     $ yarn bootstrap

## Populate Data

For the frontend and the API works, you must have the data loaded on the local database:

     $ yarn clocks 

## Serve

This command will start both the frontend and the api together

     $ yarn start 

To start the services individually do:

     $ yarn api
     $ yarn frontend