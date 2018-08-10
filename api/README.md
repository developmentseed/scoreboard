Scoreboard API
==============
Scoreboard API powers the Scoreboard. It provides the OSM users data to the Scoreboard and allow grouping and searching of users and campaigns. It also provides insight into OSM top stats.


**Version:** 0.1.0

**Contact information:**  
info@developmentseed.org  

### /scoreboard/api/users
---
##### ***GET***
**Summary:** list of OSM users

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | The pagination parameter (each page is limit to 25 results) | No | integer |
| search | query | Is used for searching the users display name | No | string |
| country | query | list of countries to return. To search for more than on country, use comma. Example: canada,france | No | string |
| sortType | query | Sort users by a given type | No | string |
| active | query | Indicator for whether to include only users who have been active in the last 6 months | No | boolean |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The list of OSM users |

### /scoreboard/api/users/{id}
---
##### ***GET***
**Summary:** a specific user

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | User's OSM ID | Yes | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The OSM user object |

### /scoreboard/api/campaigns
---
##### ***GET***
**Summary:** list of campaigns

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query | The pagination parameter (each page is limit to 25 results) | No | integer |
| search | query | Search for campaign names | No | string |
| compl_min | query | Minimum percentage of completion | No | integer |
| compl_max | query | Maximum percentage of completion | No | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | List of campaigns |

### /scoreboard/api/campaigns/{id}
---
##### ***GET***
**Summary:** a specific campaign

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | The campaign ID | Yes | integer |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The campaign object |

### /scoreboard/api/topstats
---
##### ***GET***
**Summary:** the top stats

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Returns list of responses |
