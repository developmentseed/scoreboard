# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Ability to login using OSM (using passport in the backend)
- Initial dashboard page that allows users to see their personal stats
- Allow badge creation, deletion, and updates through API routes
- cli tool for debugging and administration in development
- User roles
  - db table & roles model
  - role validation helpers
  - API endpoints
  - UI for managing the roles of users
- Initial admin UI for managing users, roles, and badges
- Mock passport strategy for testing routes that require authentication

### Changed
- Migrated to [next.js](https://github.com/zeit/next.js/)
  - Instead of deploying the api and frontend separately, the two codebases are 
    merged into one with server-rendering provided by next.js
  - For changes to development process see the [updated README.md](README.md)
- Move from Sqlite to Postgres
- Drop some columns from the user schema
- Move tests and fixtures for API into a single place
- Move badge calculations to the backend
- Move badge details to the database
- Revise user model to be the same format as the roles model
- Move existing `api/users` endpoint to `api/users/stats` and use `api/users` for a list of users without stats

## [v0.2.4] - 2018-10-23
### Added
- A 404 page for missing campaigns

### Fixed
- updated OsMesa api endpoint for campaigns to `/campaigns` from `/hashtags`

## [v0.2.3] - 2018-10-22

### Fixed
- allow setting custom project names
- unregister existing service workers 

## [v0.2.2] - 2018-10-12

### Fixed
- frontend/react: convert uid to string

## [v0.2.1] - 2018-10-09

### Added
- Support custom path for sqlite3 database file

### Fixed
- Pass username as a footprint layer name
- Add support for running the frontend side on addresses other than `/scoreboard`
- Remove service workers to allow loading `/api` and `/docs` in the browser when using proxy

## [v0.2.0] - 2018-08-14

### Added
- Ability for user to sort by Most/Least recent edit or Most/Least total number of edits on /users.
- Ava test suite in api/tests/test.js uses obscured data in api/tests/fixtures and checks api/user(s) endpoints
- Added mocked endpoints for external APIs

### Changed
- Took out user table sorting (which overwrote sorts executed on the backend) in frontend/src/commponents/AllUsersTable.js.
- Started using lerna for package management
- Logic for setting up the application separated from the rest of api/server.js and put into api/index.js
- Connection.js (api/db/) now returns a function which sets a different database path when NODE_ENV is set to TEST
- Api source code is organized under the `src` folder

## [v0.1.0] - 2018-08-03

- The first release

[Unreleased]: https://github.com/developmentseed/scoreboard/compare/v0.2.4...HEAD
[v0.2.4]: https://github.com/developmentseed/scoreboard/compare/v0.2.3...v0.2.4
[v0.2.3]: https://github.com/developmentseed/scoreboard/compare/v0.2.2...v0.2.3
[v0.2.2]: https://github.com/developmentseed/scoreboard/compare/v0.2.1...v0.2.2
[v0.2.1]: https://github.com/developmentseed/scoreboard/compare/v0.2.0...v0.2.1
[v0.2.0]: https://github.com/developmentseed/scoreboard/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/developmentseed/scoreboard/compare/d4fc54a...v0.1.0