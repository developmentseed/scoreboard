
<h1 align="center">Scoreboard 🗺🎯</h1>

<div align="center">
Engaging and encouraging mappers of OpenStreetMap by rewarding contributions, promoting campaigns, and reporting current mapper statistics
</div>

<br />
<div align="center">
  <a href="https://circleci.com/gh/developmentseed/scoreboard">
    <img src="https://circleci.com/gh/developmentseed/scoreboard.png" />
  </a>
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
</div>

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

### Services
Scoreboard depends on three external services/APIs for statistics and functionality:
- [OSMesa](https://github.com/azavea/osmesa) is a toolkit for processing large amounts of OSM vector data and turning them into stats (e.g: km of road added by user by country)
- Scoreboard pulls campaigns from the [Tasking Manager](https://github.com/hotosm/tasking-manager) and uses the campaign hashtags to pull campaign specific aggregations from OSMesa
- [OSM Teams](https://github.com/developmentseed/osm-teams) is a service that allows Scoreboard users to create teams and assign campaigns to a team.

### Env file

There should be an env file in the root project directory with the following environment variables.

For development simply run: `cp .env.sample .env`. In development, the Osmesa service is mocked, so the environment variables `OSMESA_API` is not required.

| name | description
| ---  | -----
| NODE_ENV | The configuration to use, "test", "development" or "production"
| OSMESA_API | URL to the OSMESA http server that serves out statistics
| APP_URL | URL where the site will be hosted
| OSM_CONSUMER_KEY | An Oauth Key/Secret pair to authenticate with OSM
| OSM_CONSUMER_SECRET | An Oauth Key/Secret pair to authenticate with OSM
| OSM_DOMAIN | OSM endpoint (defaults to openstreetmap.com)
| OSM_TEAMS_SERVICE | Location of the OSM teams API
| SESSION_SECRET | A secret phrase to sign session tokens
| DATABASE_URL | The location of the postgres database

Once the Scoreboard app is running, you can add a tasking manager in the admin panel


## Installation and Dev

     $ yarn

## Postgres Setup

### Create and Run the database

     $ docker-compose up -d

This command will create and run the database on port `5433`. The database files are stored under `.tmp` folder.

If you are running the command for the first time, you should wait until the database is created. This can take a few minutes.

To start with a new database with no data, stop the command, remove the `.tmp` folder and run the command again.

### Run migrations

Set up the database schema by running:

     $ yarn migrate

You can rollback migrations with `yarn rollback`.

### Populate Data
For the frontend and the API to work, you must have the data loaded on the local database.

To generate fake user and campaign data run:

     $ yarn seed

### Create an admin user

To be able to develop admin pages you'll need to have an admin user.

Make your user an admin by running:

```
./api/bin/scoreboard create-admin-user --username {your osm username}
```

If you were already logged in, log out and log back in, then you'll see an "admin" link in the menu in the top right.

## Serve

This command will start both the frontend and the api together

     $ yarn dev

## Test

Tests for the API endpoints and related code are stored in [api/tests/](api/tests/) and UI tests are stored in [tests/](tests/). To run both:

    $ yarn test

Test the UI and API separately using `yarn test-ui` and `yarn test-api`.

## Lint

Lint the code using:

     $ yarn lint

You can automatically fix some lint errors using `yarn lintfix`.

## Generating Docs

If you make changes to the API documentation make sure to update the README for the API which is auto-generated from the swagger YAML by running:

     $ yarn docs

# Production

To use scoreboard in production follow these steps:

1. Make sure you have all the [requirements](#dependencies).
2. Install dependencies: `yarn`
3. Setup a production Postgres database
4. Create the database by running [these commands](scripts/create-dev-db.sh).
5. Setup an `.env` file with correct values -> [example](.env.sample).
  - make sure to set `NODE_ENV=production` in your `.env` file
6. Run the migrations: `npm run migrate`
7. Add initial data to the database (skip if the database already has data) `npm run seed`
8. [OPTIONAL] Preload list of users `npm run users`
9. Populate stats: `npm run clocks`
10. [OPTIONAL] Assign admin users by running `./api/bin/scoreboard create-admin-user --osm-id {your-id}`
11. Build: `npm run build`
12. Launch the server: `node server.js`
