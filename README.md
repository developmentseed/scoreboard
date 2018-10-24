# OSM Scoreboard 🗺 🎯

[![CircleCI](https://circleci.com/gh/developmentseed/scoreboard.svg?style=svg)](https://circleci.com/gh/developmentseed/scoreboard)

A project to display OSM user contribution metrics and campaign metrics.

- `api`: source to the API as well as processes to grab data from various OSM sources.
- `frontend`: source to the frontend application.
- `deployment`: deployment guides for CentOS only

# 🔨 Development

## Dependencies
- Node 8.4
- Postgres 9.5+
- Yarn
- Docker (for development work)

To set the Node version as specified above:

     $ brew install nvm
     $ nvm use

See [this tutorial](https://www.postgresql.org/download/) for details and instructions for installing PostgreSQL on your operating system

### Env file

There should be an env file in `/api` with the following environment variables.

For development simply run: `cp api/.env.sample api/.env`. In development, the Osmesa and Tasking Manager services are mocked, so the environment variables `TM_URL`, `TM_HASHTAG`, `FILTERED_USERS` and `OSMESA_API` are not required. 

```
NODE_ENV=development
TM_URL=https://tasking-manager-url
TM_HASHTAG=tasking-manager-prefix
OSMESA_API=https://link-to-osmesa-api
FILTERED_USERS='0,1,2'
APP_URL=http://localhost:3000
API_URL=http://localhost:5000
OSM_CONSUMER_KEY=your-oauth-key
OSM_CONSUMER_SECRET=your-oauth-secre
SESSION_SECRET=super-secret-sessions
DATABASE_URL=postgres://postgres@localhost:5433/scoreboard
```

| name | description
| ---  | -----
| NODE_ENV | The configuration to use, "staging", "development" or "production"
| TM_URL | The URL of the tasking manager to scrape
| TM_HASHTAG | The default prefix the tasking manager uses as a hashtag (e.g. "osmus-project")
| OSMESA_API | URL to the OSMESA http server that serves out statistics
| API_URL | URL where this API will be hosted
| APP_URL | URL where the frontend will be hosted
| FILTERED_USERS | Comma separated user list, to filter import users
| OSM_CONSUMER_KEY | An Oauth Key/Secret pair to authenticate with OSM
| OSM_CONSUMER_SECRET | An Oauth Key/Secret pair to authenticate with OSM
| SESSION_SECRET | A secret phrase to sign session tokens
| DATABASE_URL | The location of the postgres database

## Installation and Dev

We use [lerna](https://github.com/lerna/lerna) for installation and package management

     $ yarn
     $ yarn bootstrap

## Postgres Setup

### Create and Run the database

     $ docker-compose run --rm --service-port db

This command will create and run the database on port `5433`. The database files are stored under `.tmp` folder.

If you are running the command for the first time, you should wait until the database created.

To start with a new database with no data, stop the command, remove the `.tmp` folder and run the command again.

### Run migrations

Set up the database schema by running:

     $ yarn migrate

### Populate Data
For the frontend and the API to work, you must have the data loaded on the local database.

To generate fake user data run:

     $ yarn seed

To populate fake campaign and tasking manager data run: 

     $ yarn clocks 

## Serve

This command will start both the frontend and the api together

     $ yarn start 

To start the services individually do:

     $ yarn api
     $ yarn frontend

## Test

We have provided some unit tests in api/tests/test.js. To run:

    $ yarn test

## Generating Docs

If you make changes to the API documentation make sure to update the README for the API which is auto-generated from the swagger YAML by running:

     $ yarn docs
