var path = require("path");

/**
 * GET /api/v1/project/search?mapperLevel=BEGINNER&page=3
 *
 * accept-language: en-US,en;q=0.9
 * host: tasks.openstreetmap.us
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Wed, 13 Mar 2019 17:21:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "11125");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("access-control-allow-origin", "*");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJtYXBSZXN1bHRzIjogeyJ0eXBlIjogIkZlYXR1cmVDb2xsZWN0aW9uIiwgImZlYXR1cmVzIjogW3sidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy0xMjIuMzExNDc2ODQzOTEyLCA0OC40MjAzMTYyMzAyODYzXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiAxMDksICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy03OC45MDc5NzM1NzQwMDc5LCAzNS45Nzc0ODk1MjI3NjM2XX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA5MiwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTg1LjYzMjYyMjgwODQ0MDUsIDMwLjIzNzY0NjUzMzc2ODVdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDg1LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstMTEyLjAzNzQ0NjIyMjc4NSwgMzMuMzYxNTE1NTU0NjY3XX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA4MSwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTExMi4xNzA4NTE0Nzc2MjMsIDMzLjM4MjQzNTY3MTE2NDFdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDgwLCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstMTEyLjAyNDYzOTUwMDM4OCwgMzMuNDY1ODM0ODk2MDk4NF19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNzksICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy0xMTIuMDM2NTgxMDI4OTY0LCAzMy41MzYzNTI5OTg4NjQzXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA3OCwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTExMi4xNzY3MDg5MjM1MTMsIDMzLjQ5NDM4OTYzMDQ3MV19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNzcsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy0xMTIuMDgyNjYxODkzOTk4LCAzMy43MTY2MjU0NzA1NDUyXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA3MywgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTgzLjA2MjgwMDU4OTY5LCA0Mi4zNDcwMjE3NjY2MTM0XX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA3MCwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTgzLjA1MjgwNjgxMTg1NDUsIDQyLjM0NDk2NzM5NzE5MTldfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDY5LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuMDQ5MTkxOTEyNDcsIDQyLjM0ODkxMTUxMzI4NzZdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDY4LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuMDQ3MTk3NDI3MjA2NywgNDIuMzQ1MzYyNjM3OTE0OV19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNjcsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy04My4wMzk1Mjk0MTAzMDI0LCA0Mi4zNDk3NjQ3MjU3MjgzXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA2NiwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTgzLjAyMjYzNTc1NTAwMDcsIDQyLjM0NTgwMDI1NDk2OTZdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDY1LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuMDE3MzgyODI0NTY2MiwgNDIuMzM3OTc0MTIyODcwM119LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNjQsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy04My4wMzQ3ODE4NDYyMjU0LCA0Mi4zMzk3Njc0NTg4MjZdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDYzLCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuMDQxNzUwNzA0MzAzNSwgNDIuMzM1MTQwNzcwNjMzNF19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNjIsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy04My4wNDgyNjgwMjEyMDMyLCA0Mi4zMzI5NTg3NTYxNDUzXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA2MSwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTgzLjA3MzM1MjQzNTYxNTIsIDQyLjMyMzM1NjIyODY2MTddfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDYwLCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuMDc2Mzg5NDIzMjExNSwgNDIuMzM3MTQ5MjczMDM3NV19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNTksICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy05NS4yODMzNDM2MDk5MjE4LCA0NC4yNTQ2MTc2OTcyNTVdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDUzLCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuOTc4OTQxNDk5MDY3MSwgNDIuMTkzNjc3OTgyNDIwM119LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNDMsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy04My45Njk1MzYxNzA5NiwgNDIuMTg1MDU2MTM3MjJdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDI2LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstMTE2LjM5NTY0NjMyOTg1NCwgNDMuNjE1NDQ2MTkwNDkwN119LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogMjEsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy0xMTIuNjAwODg0OTk3ODQ0LCAzMy40MjIxODkxNDY5OTUzXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiAxNSwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTEyMS4zMDAwODcxOTk3MDQsIDQ0LjA1Nzc0MDU5MTc3MjJdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDE0LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstOTcuNzAyNTEyNTkxMjg4OSwgMzAuNjU3NTc4NDE1OTMyXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiAxMiwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTgyLjM3NDQ4MjI2NjcwNTQsIDM0LjgzNjEwMTU2Mjc4MjhdfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDEwLCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstOTYuNjM5MzExOTkxNzgxNywgMzMuMjAwNjA0MjI5MzQ5OV19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogOSwgInByaW9yaXR5IjogIk1FRElVTSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbLTEyMS4xODMxOTA4MjUxODgsIDM4LjY1ODA3MDg1MzUxNjldfSwgInByb3BlcnRpZXMiOiB7InByb2plY3RJZCI6IDcsICJwcmlvcml0eSI6ICJNRURJVU0ifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy05Ni44NDE2ODQ5NTcxNzYzLCAzMy4xNTE1OTIzNDA5NjYzXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiA0LCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODUuMDcyMDQ3ODM0NTczLCA0MS4wOTE0MDA4NjQ2OTcyXX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiAyLCAicHJpb3JpdHkiOiAiTUVESVVNIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstNzguNjYyOTY2NDE1Njc0MiwgMzUuODI3NTQ4MzUyNzcyNl19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogMTE3LCAicHJpb3JpdHkiOiAiTE9XIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODkuNzc0OTEyMzMzNDY2MiwgNDQuOTQ1Mzc2NTk4MDM0N119LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogMTA4LCAicHJpb3JpdHkiOiAiTE9XIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstNzEuMDg3MDI2ODQ5NTkzOSwgNDIuNjcxODIzNzY0MDgyOF19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogMTAxLCAicHJpb3JpdHkiOiAiTE9XIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJQb2ludCIsICJjb29yZGluYXRlcyI6IFstODMuMTE3MjU2MDk1MDQ5OCwgNDIuMzY2OTkwODkwMjUzNl19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogNDQsICJwcmlvcml0eSI6ICJMT1cifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIlBvaW50IiwgImNvb3JkaW5hdGVzIjogWy03OS4zNTAzMjYyNzIwMDU1LCAzOC42ODAwMjk0OTg5MzY3XX0sICJwcm9wZXJ0aWVzIjogeyJwcm9qZWN0SWQiOiAzNCwgInByaW9yaXR5IjogIkxPVyJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiUG9pbnQiLCAiY29vcmRpbmF0ZXMiOiBbMTAxLjM0NjQ3OTQ2NjY3OSwgMTguOTQwNjM0NDE3Mzg3MV19LCAicHJvcGVydGllcyI6IHsicHJvamVjdElkIjogMjcsICJwcmlvcml0eSI6ICJMT1cifX1dfSwgInJlc3VsdHMiOiBbeyJwcm9qZWN0SWQiOiAxMCwgImxvY2FsZSI6ICJlbiIsICJuYW1lIjogIlVwZGF0aW5nIHRoZSByb2FkIG5ldHdvcmsgaW4gR3JlZW52aWxsZSwgU0MuIiwgInNob3J0RGVzY3JpcHRpb24iOiAiQWNjb3JkaW5nIHRvIHRoZSBVUyBDZW5zdXMgR3JlZW52aWxsZSwgU0MuIGlzIGFtb25nIHRoZSBmYXN0ZXN0IGdyb3dpbmcgY2l0aWVzIGJldHdlZW4gMjAxNSBhbmQgMjAxNiB3aXRoIHBvcHVsYXRpb25zIG92ZXIgNTAsMDAwIGluIDIwMTUuIFRoaXMgcHJvamVjdCBsb29rcyB0byBhZGQgdGhlIG5ldyByb2FkcyB3aGljaCBzdXBwb3J0IHRoaXMgZGV2ZWxvcG1lbnQuIiwgIm1hcHBlckxldmVsIjogIkJFR0lOTkVSIiwgInByaW9yaXR5IjogIk1FRElVTSIsICJvcmdhbmlzYXRpb25UYWciOiAiTWljcm9zb2Z0IiwgImNhbXBhaWduVGFnIjogbnVsbCwgInBlcmNlbnRNYXBwZWQiOiAxMDAuMCwgInBlcmNlbnRWYWxpZGF0ZWQiOiAxMDAuMCwgInN0YXR1cyI6ICJQVUJMSVNIRUQiLCAiYWN0aXZlTWFwcGVycyI6IDB9LCB7InByb2plY3RJZCI6IDksICJsb2NhbGUiOiAiZW4iLCAibmFtZSI6ICJVcGRhdGluZyB0aGUgcm9hZCBuZXR3b3JrIGluIE1jS2lubmV5IENpdHksIFRleGFzIiwgInNob3J0RGVzY3JpcHRpb24iOiAiQWNjb3JkaW5nIHRvIHRoZSBVUyBDZW5zdXMgTWNLaW5uZXkgVFggaXMgYW1vbmcgdGhlIGZhc3Rlc3QgZ3Jvd2luZyBjaXRpZXMgYmV0d2VlbiAyMDE1IGFuZCAyMDE2IHdpdGggcG9wdWxhdGlvbnMgb3ZlciA1MCwwMDAgaW4gMjAxNS4gVGhpcyBwcm9qZWN0IGxvb2tzIHRvIGFkZCB0aGUgbmV3IHJvYWRzIHdoaWNoIHN1cHBvcnQgdGhpcyBkZXZlbG9wbWVudC4iLCAibWFwcGVyTGV2ZWwiOiAiQkVHSU5ORVIiLCAicHJpb3JpdHkiOiAiTUVESVVNIiwgIm9yZ2FuaXNhdGlvblRhZyI6ICJNaWNyb3NvZnQiLCAiY2FtcGFpZ25UYWciOiBudWxsLCAicGVyY2VudE1hcHBlZCI6IDEwMC4wLCAicGVyY2VudFZhbGlkYXRlZCI6IDEwMC4wLCAic3RhdHVzIjogIlBVQkxJU0hFRCIsICJhY3RpdmVNYXBwZXJzIjogMH0sIHsicHJvamVjdElkIjogNywgImxvY2FsZSI6ICJlbiIsICJuYW1lIjogIkJ1aWxkaW5nIE91dGxpbmVzIGluIHRoZSBGb2xzb20gQXJlYSIsICJzaG9ydERlc2NyaXB0aW9uIjogIlRoaXMgdGFzayBpcyB0byBnZW5lcmF0ZSBidWlsZGluZyBvdXRsaW5lcyBpbiB0aGUgRm9sc29tIEFyZWEsIGFuZCB0cnkgdG8gY2F0ZWdvcml6ZSBzYWlkIGJ1aWxkaW5ncy4iLCAibWFwcGVyTGV2ZWwiOiAiQkVHSU5ORVIiLCAicHJpb3JpdHkiOiAiTUVESVVNIiwgIm9yZ2FuaXNhdGlvblRhZyI6IG51bGwsICJjYW1wYWlnblRhZyI6IG51bGwsICJwZXJjZW50TWFwcGVkIjogMTQuMCwgInBlcmNlbnRWYWxpZGF0ZWQiOiA1LjAsICJzdGF0dXMiOiAiUFVCTElTSEVEIiwgImFjdGl2ZU1hcHBlcnMiOiAwfSwgeyJwcm9qZWN0SWQiOiA0LCAibG9jYWxlIjogImVuIiwgIm5hbWUiOiAiVXBkYXRpbmcgdGhlIHJvYWQgbmV0d29yayBpbiBGcmlzY28gQ2l0eSwgVGV4YXMiLCAic2hvcnREZXNjcmlwdGlvbiI6ICJBY2NvcmRpbmcgdG8gdGhlIFVTIENlbnN1cyBGcmlzY28gQ2l0eSB0b3BzIHRoZSBmYXN0ZXN0IGdyb3dpbmcgY2l0aWVzIGJldHdlZW4gMjAxNSBhbmQgMjAxNiB3aXRoIHBvcHVsYXRpb25zIG92ZXIgNTAsMDAwIGluIDIwMTUuIFRoaXMgcHJvamVjdCBsb29rcyB0byBhZGQgdGhlIG5ldyByb2FkcyB3aGljaCBzdXBwb3J0IHRoaXMgZGV2ZWxvcG1lbnQuIiwgIm1hcHBlckxldmVsIjogIkJFR0lOTkVSIiwgInByaW9yaXR5IjogIk1FRElVTSIsICJvcmdhbmlzYXRpb25UYWciOiAiTWljcm9zb2Z0IiwgImNhbXBhaWduVGFnIjogbnVsbCwgInBlcmNlbnRNYXBwZWQiOiAxMDAuMCwgInBlcmNlbnRWYWxpZGF0ZWQiOiAxMDAuMCwgInN0YXR1cyI6ICJQVUJMSVNIRUQiLCAiYWN0aXZlTWFwcGVycyI6IDB9LCB7InByb2plY3RJZCI6IDIsICJsb2NhbGUiOiAiZW4iLCAibmFtZSI6ICJBbGxlbiBDb3VudHkgYnVpbGRpbmcgb3V0bGluZXMiLCAic2hvcnREZXNjcmlwdGlvbiI6ICJBIHByb2plY3QgdG8gdHJhY2sgdGhlIHRyYWNpbmcgb2YgYnVpbGRpbmdzIGluIEFsbGVuIENvdW50eSwgSW5kaWFuYS4iLCAibWFwcGVyTGV2ZWwiOiAiQkVHSU5ORVIiLCAicHJpb3JpdHkiOiAiTUVESVVNIiwgIm9yZ2FuaXNhdGlvblRhZyI6IG51bGwsICJjYW1wYWlnblRhZyI6IG51bGwsICJwZXJjZW50TWFwcGVkIjogOS4wLCAicGVyY2VudFZhbGlkYXRlZCI6IDEuMCwgInN0YXR1cyI6ICJQVUJMSVNIRUQiLCAiYWN0aXZlTWFwcGVycyI6IDB9LCB7InByb2plY3RJZCI6IDExNywgImxvY2FsZSI6ICJlbiIsICJuYW1lIjogIk5DIENsZWFyIFBhdGggLSBSYWxlaWdoIiwgInNob3J0RGVzY3JpcHRpb24iOiAiTkMgQ2xlYXIgUGF0aCBzZWVrcyB0byBwcm92aWRlIHNhZmUgYW5kIGFjY2Vzc2libGUgdHJpcCBwbGFubmluZyBvbiBwZWRlc3RyaWFuIHdheXMgZm9yIHRob3NlIHdpdGggbGltaXRlZCBtb2JpbGl0eS4gQXMgcGFydCBvZiB0aGlzIHByb2plY3QsIHdlIGFyZSBtYXBwaW5nIHNpZGV3YWxrcyBhY3Jvc3MgTm9ydGggQ2Fyb2xpbmEuIiwgIm1hcHBlckxldmVsIjogIkJFR0lOTkVSIiwgInByaW9yaXR5IjogIkxPVyIsICJvcmdhbmlzYXRpb25UYWciOiBudWxsLCAiY2FtcGFpZ25UYWciOiBudWxsLCAicGVyY2VudE1hcHBlZCI6IDEuMCwgInBlcmNlbnRWYWxpZGF0ZWQiOiAwLjAsICJzdGF0dXMiOiAiUFVCTElTSEVEIiwgImFjdGl2ZU1hcHBlcnMiOiAwfSwgeyJwcm9qZWN0SWQiOiAxMDgsICJsb2NhbGUiOiAiZW4iLCAibmFtZSI6ICJXaXNjb25zaW4gTXVsdGktQ291bnR5IEJ1aWxkaW5nIEltcG9ydCIsICJzaG9ydERlc2NyaXB0aW9uIjogIkltcG9ydCBvZiAyMSBjb3VudGllcycgYnVpbGRpbmcgZm9vdHByaW50IGxheWVycy4iLCAibWFwcGVyTGV2ZWwiOiAiQkVHSU5ORVIiLCAicHJpb3JpdHkiOiAiTE9XIiwgIm9yZ2FuaXNhdGlvblRhZyI6IG51bGwsICJjYW1wYWlnblRhZyI6IG51bGwsICJwZXJjZW50TWFwcGVkIjogMjkuMCwgInBlcmNlbnRWYWxpZGF0ZWQiOiAxOS4wLCAic3RhdHVzIjogIlBVQkxJU0hFRCIsICJhY3RpdmVNYXBwZXJzIjogMH0sIHsicHJvamVjdElkIjogMTAxLCAibG9jYWxlIjogImVuIiwgIm5hbWUiOiAiTm9ydGggQW5kb3ZlciBTaWRld2Fsa3MiLCAic2hvcnREZXNjcmlwdGlvbiI6ICJUaGlzIHByb2plY3QgaXMgZm9yIGNvbnRyaWJ1dGluZyBzaWRld2FsayBhbmQgcGVkZXN0cmlhbiBkYXRhIHRvIE5vcnRoIEFuZG92ZXIsIE1hc3NhY2h1c2V0dHMuIiwgIm1hcHBlckxldmVsIjogIkJFR0lOTkVSIiwgInByaW9yaXR5IjogIkxPVyIsICJvcmdhbmlzYXRpb25UYWciOiBudWxsLCAiY2FtcGFpZ25UYWciOiBudWxsLCAicGVyY2VudE1hcHBlZCI6IDIwLjAsICJwZXJjZW50VmFsaWRhdGVkIjogMC4wLCAic3RhdHVzIjogIlBVQkxJU0hFRCIsICJhY3RpdmVNYXBwZXJzIjogMH0sIHsicHJvamVjdElkIjogNDQsICJsb2NhbGUiOiAiZW4iLCAibmFtZSI6ICJERU1PIC0gRGV0cm9pdCBDaXR5IE1TIEJ1aWxkaW5nIEltcG9ydCIsICJzaG9ydERlc2NyaXB0aW9uIjogIkEgc21hbGwgZGVtbyBwcm9qZWN0IHRvIGhlbHAgd2l0aCB0aGUgTVMgYnVpbGRpbmcgZm9vdHByaW50cyB3b3JrZmxvdyBwcm9jZXNzLiIsICJtYXBwZXJMZXZlbCI6ICJCRUdJTk5FUiIsICJwcmlvcml0eSI6ICJMT1ciLCAib3JnYW5pc2F0aW9uVGFnIjogbnVsbCwgImNhbXBhaWduVGFnIjogbnVsbCwgInBlcmNlbnRNYXBwZWQiOiAwLjAsICJwZXJjZW50VmFsaWRhdGVkIjogMC4wLCAic3RhdHVzIjogIlBVQkxJU0hFRCIsICJhY3RpdmVNYXBwZXJzIjogMH0sIHsicHJvamVjdElkIjogMzQsICJsb2NhbGUiOiAiZW4iLCAibmFtZSI6ICJNYXBwaW5nIFBlbmRsZXRvbiBDb3VudHksIFdWIiwgInNob3J0RGVzY3JpcHRpb24iOiAiVGhpcyB0YXNrIGlzIGZvciBtYXBwaW5nIFBlbmRsZXRvbiBDb3VudHkgaW4gV2VzdCBWaXJnaW5hLiIsICJtYXBwZXJMZXZlbCI6ICJCRUdJTk5FUiIsICJwcmlvcml0eSI6ICJMT1ciLCAib3JnYW5pc2F0aW9uVGFnIjogbnVsbCwgImNhbXBhaWduVGFnIjogbnVsbCwgInBlcmNlbnRNYXBwZWQiOiA1MC4wLCAicGVyY2VudFZhbGlkYXRlZCI6IDAuMCwgInN0YXR1cyI6ICJQVUJMSVNIRUQiLCAiYWN0aXZlTWFwcGVycyI6IDB9LCB7InByb2plY3RJZCI6IDI3LCAibG9jYWxlIjogImVuIiwgIm5hbWUiOiAiWGF5YWJvdXJ5IFByb3ZpbmNlIiwgInNob3J0RGVzY3JpcHRpb24iOiAiVGhpcyB0YXNrIGhhcyBiZWVuIHNldCB1cCBhcyBwYXJ0IG9mIGEgV29ybGQgQmFuayB0cmFpbmluZyBwcm9ncmFtIGZvciB0aGUgTGFvcyBQRFIgRGVwYXJ0bWVudCBvZiBUcmFuc3BvcnQgb24gdXNpbmcgTWFwaWxsYXJ5LCBPcGVuIFN0cmVldCBNYXAsIGFuZCBRR0lTIHRvIHN1cHBvcnQgcnVyYWwgcm9hZCBhc3NldCBtYW5hZ2VtZW50IGRhdGEgY29sbGVjdGlvbi4iLCAibWFwcGVyTGV2ZWwiOiAiQkVHSU5ORVIiLCAicHJpb3JpdHkiOiAiTE9XIiwgIm9yZ2FuaXNhdGlvblRhZyI6IG51bGwsICJjYW1wYWlnblRhZyI6IG51bGwsICJwZXJjZW50TWFwcGVkIjogMi4wLCAicGVyY2VudFZhbGlkYXRlZCI6IDAuMCwgInN0YXR1cyI6ICJQVUJMSVNIRUQiLCAiYWN0aXZlTWFwcGVycyI6IDB9XSwgInBhZ2luYXRpb24iOiB7Imhhc05leHQiOiBmYWxzZSwgImhhc1ByZXYiOiB0cnVlLCAibmV4dE51bSI6IG51bGwsICJwYWdlIjogMywgInBhZ2VzIjogMywgInByZXZOdW0iOiAyLCAicGVyUGFnZSI6IDE0LCAidG90YWwiOiAzOX19Cg==", "base64"));
  res.end();

  return __filename;
};
