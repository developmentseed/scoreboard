var path = require("path");

/**
 * GET /api/v1/project/62?as_file=false
 *
 * accept-language: en-US,en;q=0.9
 * host: tasks.openstreetmap.us
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Mon, 04 Feb 2019 20:54:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "9354");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("access-control-allow-origin", "*");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJwcm9qZWN0SWQiOiA2MiwgInByb2plY3RTdGF0dXMiOiAiUFVCTElTSEVEIiwgInByb2plY3RQcmlvcml0eSI6ICJNRURJVU0iLCAiYXJlYU9mSW50ZXJlc3QiOiB7InR5cGUiOiAiTXVsdGlQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogW1tbWy04My4wNDMxOTQ0NzAwNzIzLCA0Mi4zMzM1ODAyODI4MDQ4XSwgWy04My4wNDQxMzA0ODA5NjEyLCA0Mi4zMzMxNzY5NDUzODUxXSwgWy04My4wNDQ3NjEzMDQ3NTYxLCA0Mi4zMzM5NjQwNTkyMTM2XSwgWy04My4wNDM3MjEwODYxODk2LCA0Mi4zMzQzNzAxMTYzNTA5XSwgWy04My4wNDMxOTQ0NzAwNzIzLCA0Mi4zMzM1ODAyODI4MDQ4XV1dLCBbW1stODMuMDM5MDA2MTAyODcxLCA0Mi4zMzY0ODAxNjI3MTE1XSwgWy04My4wNDA5NDg1OTA2NjU1LCA0Mi4zMzU2NDM4MzgyNDQ1XSwgWy04My4wNDEzMTAxNzIxNzcxLCA0Mi4zMzYxOTU2MTExMTMyXSwgWy04My4wNDEzNzI0Mzc0NjQsIDQyLjMzNjI3NzkxNDQzMTVdLCBbLTgzLjA0MTA0NjgwMDM0MzcsIDQyLjMzNjQyNDkxMTgzMl0sIFstODMuMDM5NDMzMTMyOTY0OSwgNDIuMzM3MTIwOTU0NjcxOF0sIFstODMuMDM5MTI3OTQwODM0MiwgNDIuMzM2NjY5NjgyNjEyNF0sIFstODMuMDM5MDA2MTAyODcxLCA0Mi4zMzY0ODAxNjI3MTE1XV1dLCBbW1stODMuMDQyMDQ3OTQ1OTkzNCwgNDIuMzM0MDExNDM0MTc0Nl0sIFstODMuMDQzMTEzMDc4MjM0MywgNDIuMzMzNjEyOTI1ODE0MV0sIFstODMuMDQzNjQwMDE3MDY1MSwgNDIuMzM0NDAzMjQ0MzI3XSwgWy04My4wNDI1ODQ1MTcxNTQ4LCA0Mi4zMzQ4NTYxMTcwMTY3XSwgWy04My4wNDIwNDc5NDU5OTM0LCA0Mi4zMzQwMTE0MzQxNzQ2XV1dLCBbW1stODMuMDQzNzYxOTQ3NzIyNywgNDIuMzM0NDMxNjgyNzE0Nl0sIFstODMuMDQ0Nzg2MDY3MTg3MSwgNDIuMzM0MDMxOTEwNjY3OV0sIFstODMuMDQ0ODEwNjYzNTkzNCwgNDIuMzM0MjE1NTkwMzg1N10sIFstODMuMDQ1MDg5Njk0OTUzNywgNDIuMzM0Njg0MjEwODI2MV0sIFstODMuMDQ1MDIzMzY1NjM2OSwgNDIuMzM0NzAxNDIzODg2N10sIFstODMuMDQ0MTgyMjUyNTk1MywgNDIuMzM1MDY4MDU5NjQ2MV0sIFstODMuMDQzNzYxOTQ3NzIyNywgNDIuMzM0NDMxNjgyNzE0Nl1dXSwgW1tbLTgzLjA0MTc0ODIwODYzODgsIDQyLjMzNDE2ODQ1NTY5MzNdLCBbLTgzLjA0MTk2OTA0Nzk4MTUsIDQyLjMzNDA0ODE0MzgxOTNdLCBbLTgzLjA0MjUwNDQxMTE1ODIsIDQyLjMzNDg5MDkyNDc5MDddLCBbLTgzLjA0MTk4MTEwODI1NjIsIDQyLjMzNTEyMTc1NzE0MTZdLCBbLTgzLjA0MDk4Nzc1NTUyMTksIDQyLjMzNTU0NzczMjQ2OThdLCBbLTgzLjA0MDQ0MzQ1MDU5OSwgNDIuMzM0NzQyMTEzODU1NF0sIFstODMuMDQxMDgyNDUyMzIyOSwgNDIuMzM0NDY1MDEwNTEwM10sIFstODMuMDQxNzQ4MjA4NjM4OCwgNDIuMzM0MTY4NDU1NjkzM11dXSwgW1tbLTgzLjA0MjYyNTMzMTg1MjUsIDQyLjMzNDkxNzg1MTYyODddLCBbLTgzLjA0MzY4MDkzOTA1NjEsIDQyLjMzNDQ2NDkzMjk4MDVdLCBbLTgzLjA0NDEwMjE4MDUyMjksIDQyLjMzNTEwMjcyODQ3MjVdLCBbLTgzLjA0MzA2MDcxMTU5NTEsIDQyLjMzNTU1MDgyMzI5MDJdLCBbLTgzLjA0MjYyNTMzMTg1MjUsIDQyLjMzNDkxNzg1MTYyODddXV0sIFtbWy04My4wMzg0NTg5OTM2ODk5LCA0Mi4zMzU1NzY1NDc5Mzg2XSwgWy04My4wNDAzNjMxNTg4MTc1LCA0Mi4zMzQ3NzYzNjE1MDY0XSwgWy04My4wNDA5MDc1OTM2NDcyLCA0Mi4zMzU1ODIxNzIwMTgxXSwgWy04My4wMzg5NjcyMDY1NDE3LCA0Mi4zMzY0MTc1OTI5MjczXSwgWy04My4wMzg0NTg5OTM2ODk5LCA0Mi4zMzU1NzY1NDc5Mzg2XV1dLCBbW1stODMuMDQyMDI3OTE1MTQ4MSwgNDIuMzM1MTgwOTIwMTMyN10sIFstODMuMDQyNTQ1NDU4MjIzMSwgNDIuMzM0OTUyNjI5NzI5XSwgWy04My4wNDI5ODA1NTQwNDksIDQyLjMzNTU4NTIyODMyMzldLCBbLTgzLjA0MTU1OTE3NjEzNDUsIDQyLjMzNjE5MzY2NTE4NTRdLCBbLTgzLjA0MTQ1MTQ4NDExNDksIDQyLjMzNjI0MjI0MjM3MDVdLCBbLTgzLjA0MTM5MjcyNzA5ODgsIDQyLjMzNjE2NDY5NTUwNzhdLCBbLTgzLjA0MTAyODgxMjg1MDUsIDQyLjMzNTYwOTM2MTU1NF0sIFstODMuMDQyMDI3OTE1MTQ4MSwgNDIuMzM1MTgwOTIwMTMyN11dXV19LCAidGFza3MiOiB7InR5cGUiOiAiRmVhdHVyZUNvbGxlY3Rpb24iLCAiZmVhdHVyZXMiOiBbeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiTXVsdGlQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogW1tbWy04My4wNDMxOTQ0NzAwNzIzLCA0Mi4zMzM1ODAyODI4MDQ4XSwgWy04My4wNDQxMzA0ODA5NjEyLCA0Mi4zMzMxNzY5NDUzODUxXSwgWy04My4wNDQ3NjEzMDQ3NTYxLCA0Mi4zMzM5NjQwNTkyMTM2XSwgWy04My4wNDM3MjEwODYxODk2LCA0Mi4zMzQzNzAxMTYzNTA5XSwgWy04My4wNDMxOTQ0NzAwNzIzLCA0Mi4zMzM1ODAyODI4MDQ4XV1dXX0sICJwcm9wZXJ0aWVzIjogeyJ0YXNrSWQiOiA4LCAidGFza1giOiBudWxsLCAidGFza1kiOiBudWxsLCAidGFza1pvb20iOiBudWxsLCAidGFza1NwbGl0dGFibGUiOiBmYWxzZSwgInRhc2tTdGF0dXMiOiAiUkVBRFkifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIk11bHRpUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFtbW1stODMuMDQyMDQ3OTQ1OTkzNCwgNDIuMzM0MDExNDM0MTc0Nl0sIFstODMuMDQzMTEzMDc4MjM0MywgNDIuMzMzNjEyOTI1ODE0MV0sIFstODMuMDQzNjQwMDE3MDY1MSwgNDIuMzM0NDAzMjQ0MzI3XSwgWy04My4wNDI1ODQ1MTcxNTQ4LCA0Mi4zMzQ4NTYxMTcwMTY3XSwgWy04My4wNDIwNDc5NDU5OTM0LCA0Mi4zMzQwMTE0MzQxNzQ2XV1dXX0sICJwcm9wZXJ0aWVzIjogeyJ0YXNrSWQiOiA3LCAidGFza1giOiBudWxsLCAidGFza1kiOiBudWxsLCAidGFza1pvb20iOiBudWxsLCAidGFza1NwbGl0dGFibGUiOiBmYWxzZSwgInRhc2tTdGF0dXMiOiAiUkVBRFkifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIk11bHRpUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFtbW1stODMuMDQzNzYxOTQ3NzIyNywgNDIuMzM0NDMxNjgyNzE0Nl0sIFstODMuMDQ0Nzg2MDY3MTg3MSwgNDIuMzM0MDMxOTEwNjY3OV0sIFstODMuMDQ0ODEwNjYzNTkzNCwgNDIuMzM0MjE1NTkwMzg1N10sIFstODMuMDQ1MDg5Njk0OTUzNywgNDIuMzM0Njg0MjEwODI2MV0sIFstODMuMDQ1MDIzMzY1NjM2OSwgNDIuMzM0NzAxNDIzODg2N10sIFstODMuMDQ0MTgyMjUyNTk1MywgNDIuMzM1MDY4MDU5NjQ2MV0sIFstODMuMDQzNzYxOTQ3NzIyNywgNDIuMzM0NDMxNjgyNzE0Nl1dXV19LCAicHJvcGVydGllcyI6IHsidGFza0lkIjogNiwgInRhc2tYIjogbnVsbCwgInRhc2tZIjogbnVsbCwgInRhc2tab29tIjogbnVsbCwgInRhc2tTcGxpdHRhYmxlIjogZmFsc2UsICJ0YXNrU3RhdHVzIjogIlJFQURZIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbW1tbLTgzLjA0MjYyNTMzMTg1MjUsIDQyLjMzNDkxNzg1MTYyODddLCBbLTgzLjA0MzY4MDkzOTA1NjEsIDQyLjMzNDQ2NDkzMjk4MDVdLCBbLTgzLjA0NDEwMjE4MDUyMjksIDQyLjMzNTEwMjcyODQ3MjVdLCBbLTgzLjA0MzA2MDcxMTU5NTEsIDQyLjMzNTU1MDgyMzI5MDJdLCBbLTgzLjA0MjYyNTMzMTg1MjUsIDQyLjMzNDkxNzg1MTYyODddXV1dfSwgInByb3BlcnRpZXMiOiB7InRhc2tJZCI6IDUsICJ0YXNrWCI6IG51bGwsICJ0YXNrWSI6IG51bGwsICJ0YXNrWm9vbSI6IG51bGwsICJ0YXNrU3BsaXR0YWJsZSI6IGZhbHNlLCAidGFza1N0YXR1cyI6ICJSRUFEWSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiTXVsdGlQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogW1tbWy04My4wNDE3NDgyMDg2Mzg4LCA0Mi4zMzQxNjg0NTU2OTMzXSwgWy04My4wNDE5NjkwNDc5ODE1LCA0Mi4zMzQwNDgxNDM4MTkzXSwgWy04My4wNDI1MDQ0MTExNTgyLCA0Mi4zMzQ4OTA5MjQ3OTA3XSwgWy04My4wNDE5ODExMDgyNTYyLCA0Mi4zMzUxMjE3NTcxNDE2XSwgWy04My4wNDA5ODc3NTU1MjE5LCA0Mi4zMzU1NDc3MzI0Njk4XSwgWy04My4wNDA0NDM0NTA1OTksIDQyLjMzNDc0MjExMzg1NTRdLCBbLTgzLjA0MTA4MjQ1MjMyMjksIDQyLjMzNDQ2NTAxMDUxMDNdLCBbLTgzLjA0MTc0ODIwODYzODgsIDQyLjMzNDE2ODQ1NTY5MzNdXV1dfSwgInByb3BlcnRpZXMiOiB7InRhc2tJZCI6IDQsICJ0YXNrWCI6IG51bGwsICJ0YXNrWSI6IG51bGwsICJ0YXNrWm9vbSI6IG51bGwsICJ0YXNrU3BsaXR0YWJsZSI6IGZhbHNlLCAidGFza1N0YXR1cyI6ICJSRUFEWSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiTXVsdGlQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogW1tbWy04My4wNDIwMjc5MTUxNDgxLCA0Mi4zMzUxODA5MjAxMzI3XSwgWy04My4wNDI1NDU0NTgyMjMxLCA0Mi4zMzQ5NTI2Mjk3MjldLCBbLTgzLjA0Mjk4MDU1NDA0OSwgNDIuMzM1NTg1MjI4MzIzOV0sIFstODMuMDQxNTU5MTc2MTM0NSwgNDIuMzM2MTkzNjY1MTg1NF0sIFstODMuMDQxNDUxNDg0MTE0OSwgNDIuMzM2MjQyMjQyMzcwNV0sIFstODMuMDQxMzkyNzI3MDk4OCwgNDIuMzM2MTY0Njk1NTA3OF0sIFstODMuMDQxMDI4ODEyODUwNSwgNDIuMzM1NjA5MzYxNTU0XSwgWy04My4wNDIwMjc5MTUxNDgxLCA0Mi4zMzUxODA5MjAxMzI3XV1dXX0sICJwcm9wZXJ0aWVzIjogeyJ0YXNrSWQiOiAzLCAidGFza1giOiBudWxsLCAidGFza1kiOiBudWxsLCAidGFza1pvb20iOiBudWxsLCAidGFza1NwbGl0dGFibGUiOiBmYWxzZSwgInRhc2tTdGF0dXMiOiAiUkVBRFkifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIk11bHRpUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFtbW1stODMuMDM4NDU4OTkzNjg5OSwgNDIuMzM1NTc2NTQ3OTM4Nl0sIFstODMuMDQwMzYzMTU4ODE3NSwgNDIuMzM0Nzc2MzYxNTA2NF0sIFstODMuMDQwOTA3NTkzNjQ3MiwgNDIuMzM1NTgyMTcyMDE4MV0sIFstODMuMDM4OTY3MjA2NTQxNywgNDIuMzM2NDE3NTkyOTI3M10sIFstODMuMDM4NDU4OTkzNjg5OSwgNDIuMzM1NTc2NTQ3OTM4Nl1dXV19LCAicHJvcGVydGllcyI6IHsidGFza0lkIjogMiwgInRhc2tYIjogbnVsbCwgInRhc2tZIjogbnVsbCwgInRhc2tab29tIjogbnVsbCwgInRhc2tTcGxpdHRhYmxlIjogZmFsc2UsICJ0YXNrU3RhdHVzIjogIlJFQURZIn19LCB7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbW1tbLTgzLjAzOTAwNjEwMjg3MSwgNDIuMzM2NDgwMTYyNzExNV0sIFstODMuMDQwOTQ4NTkwNjY1NSwgNDIuMzM1NjQzODM4MjQ0NV0sIFstODMuMDQxMzEwMTcyMTc3MSwgNDIuMzM2MTk1NjExMTEzMl0sIFstODMuMDQxMzcyNDM3NDY0LCA0Mi4zMzYyNzc5MTQ0MzE1XSwgWy04My4wNDEwNDY4MDAzNDM3LCA0Mi4zMzY0MjQ5MTE4MzJdLCBbLTgzLjAzOTQzMzEzMjk2NDksIDQyLjMzNzEyMDk1NDY3MThdLCBbLTgzLjAzOTEyNzk0MDgzNDIsIDQyLjMzNjY2OTY4MjYxMjRdLCBbLTgzLjAzOTAwNjEwMjg3MSwgNDIuMzM2NDgwMTYyNzExNV1dXV19LCAicHJvcGVydGllcyI6IHsidGFza0lkIjogMSwgInRhc2tYIjogbnVsbCwgInRhc2tZIjogbnVsbCwgInRhc2tab29tIjogbnVsbCwgInRhc2tTcGxpdHRhYmxlIjogZmFsc2UsICJ0YXNrU3RhdHVzIjogIlJFQURZIn19XX0sICJkZWZhdWx0TG9jYWxlIjogImVuIiwgInByb2plY3RJbmZvIjogeyJsb2NhbGUiOiAiZW4iLCAibmFtZSI6ICJJbXByb3ZlIERldHJvaXQgUE9JczogR3JlZWt0b3duIiwgInNob3J0RGVzY3JpcHRpb24iOiAiVXNlIHByb3ZpZGVkIHZlY3RvciB0aWxlIGxheWVycyBhbmQgc3RyZWV0IGxldmVsIGltYWdlcnkgZnJvbSBNYXBpbGxhcnksIE9wZW5TdHJlZXRDYW0gYW5kIE1pY3Jvc29mdCB0byBhZGQgcGxhY2VzIG9mIGludGVyZXN0IChidXNpbmVzc2VzLCBjaHVyY2hlcywgZXRjKSIsICJkZXNjcmlwdGlvbiI6ICJPbmUgb2YgdGhlIG1haW4gZ29hbHMgb2YgdGhlIERldHJvaXQgTWFwcGluZyBDaGFsbGVuZ2UgaXMgdG8gaW1wcm92ZSB0aGUgUE9JIGNvdmVyYWdlIGluIHRoZSByZWdpb24uIFRoaXMgaW5jbHVkZXMgY29tbWVyY2lhbCBhbmQgaW5kdXN0cmlhbCBidXNpbmVzc2VzLCByZXN0YXVyYW50cywgYW5kIGFueSBvdGhlciBwb2ludCBvZiBpbnRlcmVzdC4gVXNpbmcgYSBuZXcgSUQgVmVjdG9yIFRpbGUgTGF5ZXIgZmVhdHVyZSBpbiBpRCwgZWRpdG9ycyBjYW4gYWRkIGVpdGhlciBvZiAyIGxheWVycyBjcmVhdGVkIGZvciB0aGlzIGNoYWxsZW5nZS4gVGhlIGZpcnN0IGlzIGJ1c2luZXNzIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBDaXR5IG9mIERldHJvaXQuIFRoZSBzZWNvbmRzIGlzIGFuIGV4cG9ydCBvZiBQT0kncyBmcm9tIGFsbHRoZXBsYWNlcy54eXouIEJvdGggb2YgdGhlc2UgbGF5ZXJzIGhhdmUgdGhlIGxvY2F0aW9uIG9mIHRoZSBwb2ludCB3aXRoIHRoZSBidXNpbmVzcyBuYW1lIGFuZCBhZGRyZXNzZXMgYXMgc3VwcG9ydGluZyBsYWJlbHMuIFVzaW5nIHRoZXNlIGluIGNvbmp1bmN0aW9uIHdpdGggQmluZyBTdHJlZXRzaWRlIEltYWdlcnksIE9wZW5TdHJlZXRDYW0sIGFuZCBNYXBpbGxhcnkgU3RyZWV0LWxldmVsIGltYWdlcywgYW55b25lIGNhbiBwYXJ0aWNpcGF0ZSBmcm9tIGFyb3VuZCB0aGUgd29ybGQuIiwgImluc3RydWN0aW9ucyI6ICJVc2UgdGhlIG1vc3QgcmVjZW50IHNvdXJjZSBkYXRhIGF2YWlsYWJsZSBmcm9tIE1hcGlsbGFyeSwgT3BlblN0cmVldENhbSBvciBNaWNyb3NvZnQgaW4gY29uY2VydCB3aXRoIHByb3ZpZGVkIHZlY3RvciB0aWxlIGxheWVycy5cblxuIyMjIFZlY3RvciBUaWxlIExheWVycyBcbk9uIHRoZSAnTWFwIERhdGEnIHBhbmVsLCB0aGVyZSdzIGEgbmV3IFwiRGV0cm9pdCBWZWN0b3IgVGlsZXMgKEJldGEpXCIgc2VjdGlvbi4gRW5hYmxpbmcgdGhlIGNvbXBvc2l0ZSBsYXllciB0byBkaXNwbGF5IGl0IG9uIHRoZSBtYXAuIFlvdSBjYW4gc2VsZWN0IHRoZSBmZWF0dXJlIHRvIGFjY2VzcyBpdHMgYXR0cmlidXRlcywgd2hpY2ggZGlzcGxheXMgb24gYSBsZWZ0LXNpZGUgcGFuZWwgdW5kZXIgXCJDdXN0b20gTWFwIERhdGFcIi4gIFxuXG4jIyMgU3RyZWV0IExldmVsIEltYWdlcnkgIFxuVG8gdXNlIHN0cmVldCBsZXZlbCBwaG90b3MgZm9yIG1hcHBpbmcsIGNsaWNrIHRoZSBgTWFwIGRhdGFgIHBhbmVsIG9uIHRoZSBzaWRlIG9mIHRoZSBtYXAgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGF2YWlsYWJsZSBwaG90byBsYXllcnMuXG5cbldoZW4gZW5hYmxlZCwgdGhlIHBob3RvIGxheWVyIGRpc3BsYXlzIGEgbGluZSBhbG9uZyB0aGUgc2VxdWVuY2Ugb2YgcGhvdG9zLiBBdCBoaWdoZXIgem9vbSBsZXZlbHMsIGEgY2lyY2xlIG1hcmtzIGF0IGVhY2ggcGhvdG8gbG9jYXRpb24sIGFuZCBhdCBldmVuIGhpZ2hlciB6b29tIGxldmVscywgYSBjb25lIGluZGljYXRlcyB0aGUgZGlyZWN0aW9uIHRoZSBjYW1lcmEgd2FzIGZhY2luZyB3aGVuIHRoZSBwaG90byB3YXMgdGFrZW4uXG5cbldoZW4geW91IGNsaWNrIG9uIG9uZSBvZiB0aGUgcGhvdG8gbG9jYXRpb25zLCBhIHBob3RvIHZpZXdlciBhcHBlYXJzIGluIHRoZSBib3R0b20gY29ybmVyIG9mIHRoZSBtYXAuIFRoZSBwaG90byB2aWV3ZXIgY29udGFpbnMgY29udHJvbHMgdG8gc3RlcCBmb3J3YXJkIGFuZCBiYWNrd2FyZCBpbiB0aGUgaW1hZ2Ugc2VxdWVuY2UuIEl0IGFsc28gc2hvd3MgdGhlIHVzZXJuYW1lIG9mIHRoZSBwZXJzb24gd2hvIGNhcHR1cmVkIHRoZSBpbWFnZSwgdGhlIGRhdGUgaXQgd2FzIGNhcHR1cmVkLCBhbmQgYSBsaW5rIHRvIHZpZXcgdGhlIGltYWdlIG9uIHRoZSBvcmlnaW5hbCBzaXRlLlxuXG4jIyMgRWRpdGluZyBXb3JrZmxvdyAgXG5XaXRoaW4gZWFjaCBibG9jaywgdHJhdmVsIGRvd24gYWxsIHNpZGVzIG9mIHRoZSBzdHJlZXQsIGFuZCBhZGQgUE9JcywgdG8gZW5zdXJlIHRoYXQgeW91J3JlIG5vdCBtaXNzaW5nIGFueXRoaW5nIGluIHBpY3R1cmVzIGJ5IGhhdmluZyB0byBnbyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIGRpZmZlcmVudCBwaG90byBzZXQuIE1vc3Qgc2VxdWVuY2VzIGNvbnRhaW4gcGhvdG9zIG9yaWVudGVkIHRvd2FyZHMgb25seSBvbmUgc2lkZSBvZiB0aGUgc3RyZWV0LiBFbnN1cmUgdGhhdCB0aGUgb2JqZWN0cy9QT0lzIHRoYXQgeW91J3JlIGFkZGluZyBhcmUgb24gdGhlIGNvcnJlY3Qgc2lkZSBvZiB0aGUgc3RyZWV0LiBEb3VibGUgY2hlY2sgdGhlIGxvY2F0aW9uIGJ5IGlkZW50aWZ5aW5nIHRoZSBmZWF0dXJlIGluIGltYWdlcnkuXG5cblRoaW5ncyB0byBsb29rIG91dCBmb3Jcbiogc29tZXRpbWVzIHRoZSBwaWN0dXJlcyBhcmUgdG9vIGJsdXJyeSwgb3IgdGFrZW4gYXQgdGhlIHdyb25nIGFuZ2xlcyBzbyB5b3UncmUgdW5hYmxlIHRvIGlkZW50aWZ5IHRoZSBuYW1lIG9mIHRoZSBidXNpbmVzcyBvciBldmVuIGRldGVybWluZSB0aGUgcGxhY2UncyBwdXJwb3NlIChpcyBpdCBhIHNvY2lhbCBjZW50ZXIsIGEgY2xpbmljPylcbiogdW5hYmxlIHRvIHNvbWV0aW1lcyBrbm93IG1pbm9yIG51YW5jZXMgKHdoZXRoZXIgYSBwbGFjZSBpcyBtb3JlIG9mIGEgcmVzdGF1cmFudCB0aGFuIGNhZmUsIGV0YykuIiwgInBlclRhc2tJbnN0cnVjdGlvbnMiOiAiIn0sICJtYXBwZXJMZXZlbCI6ICJCRUdJTk5FUiIsICJlbmZvcmNlTWFwcGVyTGV2ZWwiOiBmYWxzZSwgImVuZm9yY2VWYWxpZGF0b3JSb2xlIjogZmFsc2UsICJwcml2YXRlIjogZmFsc2UsICJlbnRpdGllc1RvTWFwIjogInBvaW50cyBvZiBpbnRlcmVzdCwgc2lkZXdhbGtzLCBwYXJrIG5hbWVzIiwgImNoYW5nZXNldENvbW1lbnQiOiAiI29zbXVzLXRhc2tzLTYyICNzb3RtdXMyMDE4IiwgImR1ZURhdGUiOiBudWxsLCAiaW1hZ2VyeSI6IG51bGwsICJtYXBwaW5nVHlwZXMiOiBudWxsLCAiY2FtcGFpZ25UYWciOiAiRGV0cm9pdCIsICJvcmdhbmlzYXRpb25UYWciOiAiT1NNIFVTIiwgImxpY2Vuc2VJZCI6IG51bGwsICJhbGxvd2VkVXNlcm5hbWVzIjogW10sICJwcmlvcml0eUFyZWFzIjogbnVsbCwgImNyZWF0ZWQiOiAiMjAxOC0wOS0wNlQwMDoxMjowMC40NjIwNzYiLCAibGFzdFVwZGF0ZWQiOiAiMjAxOC0wOS0wN1QxNDowNDo0Ny4wNzkwMzkiLCAiYXV0aG9yIjogIkpvbmFoIEFka2lucyIsICJhY3RpdmVNYXBwZXJzIjogMCwgInRhc2tDcmVhdGlvbk1vZGUiOiAiQVJCSVRSQVJZIn0K", "base64"));
  res.end();

  return __filename;
};
