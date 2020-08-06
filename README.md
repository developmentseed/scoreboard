
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

- Node 12.14.x
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

### Environment file

Create a `.env` file by copying the `.env.sample` file and filling in the
required values. The sample file has comments above each possible environment
variable.

- See [Connecting to OSM Teams](#connecting-to-osm-teams)
- See [Administrator Settings](#administrator-settings)

## Install JavaScript Dependencies

     $ yarn

## Database Setup

### Create and run the database

     $ docker-compose up -d

This command will create and run the database on port `5433`. The database files are stored under `.tmp` folder.

If you are running the command for the first time, you should wait until the database is created. This can take a few minutes.

To start with a new database with no data, stop the command, remove the `.tmp` folder and run the command again.

### Run database migrations

Set up the database schema by running:

     $ yarn migrate

You can rollback migrations with `yarn rollback`.

### Populate database

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

Known issue: before running `create-admin-user` for username, you first have to login to the web app with that username first.

### Add some edits to your user

It could be useful to give some edits to your user in development.

You can run:

```
./api/bin/scoreboard create-edits --osm-id {your osm id}
```

This will select some random changesets from the OSMesa edits and assign them to your osm id

## Start Development Server

This command will start both the frontend and the api together, with livereloading for both the front end and api

     $ yarn dev

This command will start both the frontend and the api together, with a static version of the api
    $ yarn dev-static

## Tests

Tests for the API endpoints and related code are stored in [api/tests/](api/tests/) and UI tests are stored in [tests/](tests/). To run both:

    $ yarn test

Test the UI and API separately using `yarn test-ui` and `yarn test-api`.

## Linter

Lint the code using:

     $ yarn lint

You can automatically fix some lint errors using `yarn lintfix`.

## Generating Docs

If you make changes to the API documentation make sure to update the README for the API which is auto-generated from the swagger YAML by running:

     $ yarn docs

## Connecting to OSM Teams

In OSM-teams, choose "Connect a new app". For the callback URL use the path
`/auth/teams/accept`

For example in development, Scoreboard runs on localhost:8181, so the
callback URL would be `http://localhost:8181/auth/teams/accept` .

The client id and client secret should be saved to your Scoreboard `.env` file.

Scoreboard will work with a single organization at the moment. In osm-teams, record your organization's
ID from the API and use the environment variable `OSM_TEAMS_ORG_ID` to have scoreboard read and write
to the organization's teams.

# Administrator Settings

The Administrator Settings are found in the Admin user's dashboard, or
via the Admin entry in the User menu.

- Tasking Managers:  Currently HOT Tasking Manager (TM2 - TM3) is supported.
- Setup Badges
- Manage Users
- App Settings: OSMesa integration settings

# Production

To use scoreboard in production follow these steps:

1. Make sure you have all the [requirements](#dependencies).
1. Install dependencies: `yarn`
1. Setup a production Postgres database
1. Create the database by running [these commands](scripts/create-dev-db.sh).
1. Setup an `.env` file with correct values -> [example](.env.sample).
   - make sure to set `NODE_ENV=production` in your `.env` file
1. Run the migrations: `npm run migrate`
1. Add initial data to the database (skip if the database already has data) `npm run seed`
1. [OPTIONAL] Preload list of users `npm run users`
1. Populate stats: `npm run clocks`
1. [OPTIONAL] Assign admin users by running `./api/bin/scoreboard create-admin-user --osm-id {your-id}`
   - Note: 
1. Build: `npm run build`
1. Launch the server: `node server.js`
