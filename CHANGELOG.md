# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Leave excluded users' edits in aggregate statistics
- Updated table header styles to fix bug in Admin "Exclude Users" table, applies to whole app

## [v1.0.3] - 2019-03-07

### Fixed
- Updated country statistics to not display users in the admin-selected exclusion list

## [v1.0.2] - 2019-03-07
### Fixed
- Updated mock coastlines data to reflect new syntax
- Country statistics
  - To get top participants, subset after ordering total list by number of changesets
  - Accurate total edit count by country

## [v1.0.1] - 2019-02-22
### Changed
- Standardize how a user's last edit time is reported

### Fixed
- Remove MVT artifacts produced by OSMesa in Leaflet fallback maps 

## [v1] - 2019-02-14
### Added
- Scoreboard backend
  - Ability to login using OSM (using passport in the backend)
  - Add support for multiple roles with different permissions
    - Currently stratified into `users` and `admins`
  - Simple command for upgrading users to administrators via cli
  - Add country geojson for looking up ISO codes and geometries
  - Admins can create, delete, and update badges through API routes and the admin interface
  - Support for badges based on the date edits are made and the hashtags they're made with
  - Hashtag-based badges and expired date-specific badges are excluded from "In Progress" display
  - Exclusion list that allows admins to exclude bots from overview page statistics
  - Integration with [osm-teams](https://github.com/developmentseed/osm-teams) API
  - Support both [tasking manager 2](https://github.com/hotosm/osm-tasking-manager2) and [tasking manager 3](https://github.com/hotosm/tasking-manager)
  - Admins can add multiple tasking managers via the admin interface

- Scoreboard UI
  - UI updates, with a new responsive design
  - Homepage and logo
  - Coastline metrics
  - Reformatted campaign URLs to be independent of fault-prone hashtags
  - Country pages
  - Team pages
  - Team admins can assign campaigns to team members and team-specific priorities to campaigns
  - Ability to "favorite" a campaign to see it on your dashboard
  - Admin UI that enables admins to:
    - Give admin access to other users
    - Create and edit badges
    - Create and edit teams
    - Assign users and campaigns to teams
  - User dashboard page that includes:
    - Summary statistics
    - Team membership
    - Edited countries
    - Favorited campaigns
    - Team-favorited campaigns
    - Earned and unearned (in-progress) badges
  - Route to the dashboard when a user is logged in
  - Comprehensive documentation published at `/docs`
  - Ability to sort campaigns by last update and creation date

### Changed
- Scoreboard backend
  - Move from Sqlite to Postgres
  - Migrated to [next.js](https://github.com/zeit/next.js/)
    - Instead of deploying the api and frontend separately, the two codebases are 
      merged into one with server-rendering provided by next.js
    - For changes to development process see the [updated README.md](README.md)
  - Move badge calculations to the backend
  - Move badge details to the database
  - Revise user model module to be the same format as the roles model
  - Move existing `api/users` endpoint to `api/users/stats` and use `api/users` for a list of users without stats
  - Consecutive and total days mapped are calculated with dates formatted YYYY-MM-DD
  - Validation and completeness sliders are separated on the Campaigns page.
  - Updated favicon

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

[Unreleased]: https://github.com/developmentseed/scoreboard/compare/v1.0.3...HEAD
[v1.0.3]: https://github.com/developmentseed/scoreboard/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/developmentseed/scoreboard/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/developmentseed/scoreboard/compare/v1...v1.0.1
[v1]: https://github.com/developmentseed/scoreboard/compare/v0.2.4...v1
[v0.2.4]: https://github.com/developmentseed/scoreboard/compare/v0.2.3...v0.2.4
[v0.2.3]: https://github.com/developmentseed/scoreboard/compare/v0.2.2...v0.2.3
[v0.2.2]: https://github.com/developmentseed/scoreboard/compare/v0.2.1...v0.2.2
[v0.2.1]: https://github.com/developmentseed/scoreboard/compare/v0.2.0...v0.2.1
[v0.2.0]: https://github.com/developmentseed/scoreboard/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/developmentseed/scoreboard/compare/d4fc54a...v0.1.0
