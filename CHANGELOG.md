# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Ability to login using OSM (using passport in the backend)
- Initial dashboard page
- Allow badge creation, deletion, and updates through API routes
- cli tool for debugging and administration in development
- User roles
  - db table & roles model
  - role validation helpers
  - API endpoints
  - initial UI
- Mock passport strategy for testing routes that require authentication

### Changed
- Move from Sqlite to Postgres
- Drop some columns from the user schema
- Move tests and fixtures for API into a single place
- Move badge calculations to the backend
- Move badge details to the database
- Revise user model to be the same format as the roles model

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

[Unreleased]: https://github.com/developmentseed/scoreboard/compare/v0.2.1...HEAD
[v0.2.1]: https://github.com/developmentseed/scoreboard/compare/v0.2.0...v0.2.1
[v0.2.0]: https://github.com/developmentseed/scoreboard/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/developmentseed/scoreboard/compare/d4fc54a...v0.1.0