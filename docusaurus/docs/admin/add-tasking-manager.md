---
id: add-tasking-manager
title: "Add a tasking manager"
sidebar_label: "Add a tasking manager"
---

Admin users of Scoreboard are able to add a tasking manager's details to pull campaigns and campaign statistics. After being added, the tasking manager will be polled every 10 minutes for new details.

To add a tasking manager:

- Log in to Scoreboard and visit the admin section
- Click the "Add new Tasking Manager" button
- Enter information about the tasking manager
- Press "Create Tasking Manager" and the tasking manager will be added to the list of tasking managers to poll from.


![Admin section](assets/img/admin-add-tasking-manager.png)

## Tasking Manager details

- **Name**: The common name of this tasking manager
- **Tasking Manager URL**: The location of this tasking manager, or the tasking manager API
- **Tasking Manager Type**: Scoreboard supports pulling from Tasking Manager versions 2 and 3
- **Description**: Description or instructions for admins about this tasking manager

### Advanced details
- **Proxy URL**: If the tasking manager API is not at the same location as the URL, then set this URL for scoreboard to poll. This is typical in setups where the tasking manager is behind a firewall.

![Adding a new Tasking Manager](assets/img/add-tasking-manager-details.png)

