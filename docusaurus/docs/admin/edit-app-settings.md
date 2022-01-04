---
id: edit-app-settings
title: "Edit App Settings"
sidebar_label: "Edit App Settings"
---

The App Settings page allows you to change settings for OSMesa and OSM Teams.

## OSMesa Settings

![Change OSMesa Settings](assets/img/OSMesaSettings.png)

- OSMesa DB Connection String: This is the location of OSMesa server URL
- OSMesa Tile S3 Bucket: The AWS S3 bucket where the OSMesa vector tiles are generated
- OSMesa S3 Prefix: The location path within the bucket where the vector tiles are located (e.g: `/tiles`)
- OSMesa S3 AWS key and secret: The key pair from AWS that has access to the S3 Bucket

## OSM Teams Settings

When connected with the OSM Teams service, Scoreboard administrators may reset the Teams authentication tokens for all users. This feature should only be used in cases of Teams authentication connection errors.

Clicking the "reset tokens" button will remove the connection from all users. On next login, those users will have to re-initiate the connection to teams.