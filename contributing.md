# How to contribute to Scoreboard

## Steps to contributing

- Fork the repository
- Create a branch for your changes
- Make the changes you'd like to contribute. See the "types of contributions" list above to learn more about what we're looking for
- Submit a pull request

Before changes can be merged into master, they _must_ be accompanied by an update to the [CHANGELOG.md](https://github.com/developmentseed/scoreboard/blob/develop/CHANGELOG.md). Please file all new changes under the "Unreleased" heading in CHANGELOG.md, under the appropriate subheading of "Added," "Changed" or "Fixed."

The Changelog will describe the changes and collect them under a version corresponding to the types of updates that have been made. Versioning will follow MAJOR.MINOR.PATCH.

Once the PR is merged to master, two tasks must immediately follow:

- [ ] a git tag corresponding to the version in the Changelog should be applied to master
- [ ] the new master branch will be pulled onto production
A PR should not be merged into master unless the merger is prepared to execute the two above tasks.
