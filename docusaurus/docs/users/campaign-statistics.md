---
id: campaign-statistics
title: "Campaign Statistics"
sidebar_label: "Campaign statistics"
---

## How does it work?

Campaigns are synchronized with a source `Tasking Manager` added by a Scoreboard administrator. Campaign statistics are then matched using the unique `hashtag` for that campaign in the changeset comments in OpenStreetMap to determine who mapped in this campaign and what types of edits they've made. This unique hashtag is usually of the form `tasking-manager-{project-number}`

> If a campaign does not have a unique hashtag, or if you've omitted the hashtag from your edits, then the statistics in Scoreboard might not be accurate.


## Campaign header

The campaign header contains the following information:

- **Tasking Manager**: This is the source from which this campaign is pulled
- **Project Number**: The project number in the tasking manager
- **Last Update**: When this project was last updated _in the tasking manager_-
- **Created**: When this project was created _in the  tasking manager_
- **Last refreshed**: Time when Scoreboard pulled new statistics related to this project

![Campaign Header](assets/img/campaign-header.png)

## Project statistics

The next section contains the campaign level statistics such as how much of the campaign is completed or validated, as well as the breakdown of features mapped.

![Campaign Statistics](assets/img/campaign-statistics.png)

## User table

This section consists of a table of the top 10 users by number of changesets, and a breakdown of their edits. To download an export of the contributions of the top 10 participants for any campaign, click the **Export Data (CSV)** link on the campaign user table.

![User Table](assets/img/campaign-table.png)
