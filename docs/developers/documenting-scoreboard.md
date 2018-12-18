---
id: documenting-scoreboard
title: "Documenting Scoreboard"
sidebar_label: "Documenting Scoreboard"
---

## Running the docs site locally

While writing docs it is useful to run them locally outside of Scoreboard to check your work.

Start the docs server by running:

```
yarn docs-start
```

## Using site variables in markdown

In markdown files you can use simple template tags to add variables to the site.

Variables are defined in the `website/siteConfig.js` file in the `siteVariables` object.

For example there is a `title` variable that is set to `Scoreboard`.

To use `title` in a markdown file, you'll surround it with two sets of curly brackets:

```
{{title}}
```

Another useful variable is `appURL`. Use it to link to live pages of Scoreboard, for example:

```
[teams admin page]({{appURL}}/admin/teams)
```

Or:

```
[Log in]({{appURL}}/auth/openstreetmap)
```

### Limitations of site variables

Site variables currently don't work correctly when nested inside inline tags like `**` or `_` and are not parsed correctly for the sidebar when used as part of headers.

See the `website/template-plugin.js` file to make improvements.

## Building the docs for deployment

Docs are built as part of the main Scoreboard build step.

When you run `yarn build` a docs-build directory is created and contains the built docs. The contents of that directory are served by the API server at the `/docs` url path.
