var path = require("path");

/**
 * GET /api/v1/project/67?as_file=false
 *
 * accept-language: en-US,en;q=0.9
 * host: tasks.openstreetmap.us
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Mon, 21 Oct 2019 15:47:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "10545");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("access-control-allow-origin", "*");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJwcm9qZWN0SWQiOiA2NywgInByb2plY3RTdGF0dXMiOiAiUFVCTElTSEVEIiwgInByb2plY3RQcmlvcml0eSI6ICJNRURJVU0iLCAiYXJlYU9mSW50ZXJlc3QiOiB7InR5cGUiOiAiTXVsdGlQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogW1tbWy04My4wNDc5NDIzODc3MjAyLCA0Mi4zNDI0MTM0NTA3ODY0XSwgWy04My4wNDg3NDAwNDY5NjY4LCA0Mi4zNDIwMDc4ODAxOTU0XSwgWy04My4wNDg3NzA0MDYwMjc3LCA0Mi4zNDIwNTM3MDQyMDg3XSwgWy04My4wNDg1MTU0Nzg2ODg5LCA0Mi4zNDIxOTk5NjU5Mjg0XSwgWy04My4wNDgwMjg5OTIzMDI4LCA0Mi4zNDI0NzEwMjg4MTQ1XSwgWy04My4wNDc4MDg2MzgxNzIsIDQyLjM0MjU4MDUwNzUxOTJdLCBbLTgzLjA0Nzc4MTY1ODc2ODksIDQyLjM0MjY1ODQxNTkwNDddLCBbLTgzLjA0Nzc4NjYxODU3ODksIDQyLjM0MjcyNDYwMjEyMzRdLCBbLTgzLjA0Nzg1NTYwNDE0ODcsIDQyLjM0MjgzMTE4NzI0MjhdLCBbLTgzLjA0ODA2MTk5NjMyMzMsIDQyLjM0MzIxMDM5OTUzMzddLCBbLTgzLjA0ODAwMzg4OTYzMDMsIDQyLjM0MzIzMDk4Mjk1MTZdLCBbLTgzLjA0NTk1MDI1MTI4NzgsIDQyLjM0Mzg4MTI5ODg5MDJdLCBbLTgzLjA0NTc4NDQwMDIwNDYsIDQyLjM0Mzk3NDA5OTUyODZdLCBbLTgzLjA0NTQ2ODg1MDE1NjEsIDQyLjM0NDI1NTcwMTM2OF0sIFstODMuMDQ0ODU3MDAzODA1MywgNDIuMzQ0OTQ5MDkzMzUzOV0sIFstODMuMDQ0ODEwNzU0NzU4OCwgNDIuMzQ1MDI5OTE5OTY0Nl0sIFstODMuMDQ0NzcxNzQyMDUzNSwgNDIuMzQ1MTYwMTgwMzY5M10sIFstODMuMDQ0NzcxMzE4Mjc1MywgNDIuMzQ1Mjg5NDk3MzI2OF0sIFstODMuMDQ0ODM4Njg1NjI3MSwgNDIuMzQ1NDc1OTI3MDc1N10sIFstODMuMDQ1NDg5MDc5NDEyNywgNDIuMzQ2NDU0NzY5ODM3NF0sIFstODMuMDQ2MzE0MzIwMDY2OSwgNDIuMzQ3NzA5MjU1MDE2OF0sIFstODMuMDQ2MDAxODMxODc0LCA0Mi4zNDc4MjMwODUyODA5XSwgWy04My4wNDUwNDUzODUxMzcsIDQyLjM0NjQzNDU0MDc2MTVdLCBbLTgzLjA0NDkyODY0NzA0MzcsIDQyLjM0NjE0NTA2MjYyMzJdLCBbLTgzLjA0NDc1Nzk4NzU2NzgsIDQyLjM0NTc0NzQ4MDk2OTRdLCBbLTgzLjA0NDcxMDc0MzEzMzgsIDQyLjM0NTU1Mzk1OTg2NTZdLCBbLTgzLjA0NDY5MjYwMzc3MTMsIDQyLjM0NTM0Mjc0NTMyNDVdLCBbLTgzLjA0NDcxMTU5MjU4MDMsIDQyLjM0NTExNTgyOTc4MDZdLCBbLTgzLjA0NDc0Mzc1NDAwNDMsIDQyLjM0NDk5MTQ1NzQ4ODRdLCBbLTgzLjA0NDgzNTExNDY0OTUsIDQyLjM0NDc4MDc4MDA4NjNdLCBbLTgzLjA0NDk2ODE0MTkyMjUsIDQyLjM0NDU4NDY3ODM2ODVdLCBbLTgzLjA0NTc2MDQwMDAzMTcsIDQyLjM0Mzg4NTM1MDY3N10sIFstODMuMDQ2MDkwODQ1MjEzNCwgNDIuMzQzNTY5MzI4NjU2Nl0sIFstODMuMDQ2NTcyODE1OTM2NywgNDIuMzQzMTYxOTc5ODc0N10sIFstODMuMDQ2Nzk2Njk3MjQ1MiwgNDIuMzQyOTk4NjAwMjY0Ml0sIFstODMuMDQ3OTQyMzg3NzIwMiwgNDIuMzQyNDEzNDUwNzg2NF1dXSwgW1tbLTgzLjA0Njg2NjkyODMwODksIDQyLjM0NDQxODc0NzQyNzldLCBbLTgzLjA0Njc4MTMzMDQxMzEsIDQyLjM0NDM4ODExODYxNjNdLCBbLTgzLjA0NTk5MTg3MDM2MzcsIDQyLjM0NDMyODkwMDE4NDhdLCBbLTgzLjA0NTgwMTQ1NzQxNjUsIDQyLjM0NDI3ODAxMTY4MjFdLCBbLTgzLjA0NTY2MDQwNTQyMjQsIDQyLjM0NDE5MjAzMjMyNTZdLCBbLTgzLjA0NTg1MzAzMTIxMzQsIDQyLjM0NDAyMDE2NDQ5OTNdLCBbLTgzLjA0NTk4OTk5NjUxODEsIDQyLjM0Mzk0MzMwMzM2MDZdLCBbLTgzLjA0ODA0MTA5OTc5NDQsIDQyLjM0MzI5Mzc5MDEwNF0sIFstODMuMDQ4MDk5NzYzNDM3LCA0Mi4zNDMyNzMwNDM4NjE0XSwgWy04My4wNDg4NzI0NzU3MDY2LCA0Mi4zNDQ0NDI5OTc0NDUyXSwgWy04My4wNDkyNjUxMjI4MjY0LCA0Mi4zNDUwMzMwOTA1ODk1XSwgWy04My4wNTAxNDM3OTk5OTY0LCA0Mi4zNDYzNjExODA2Mjk1XSwgWy04My4wNDg1MjQ2MzM1ODkzLCA0Mi4zNDY5MjgzMzA4NDQ3XSwgWy04My4wNDc3NTQ2MjI1NjkzLCA0Mi4zNDU3NzY2ODM5NTg3XSwgWy04My4wNDc2NDIxMjY3NDI4LCA0Mi4zNDU1Njc0NjgwODAyXSwgWy04My4wNDY5MDgzNzIwOTk4LCA0Mi4zNDQ0NTgwNDIzNDM5XSwgWy04My4wNDY4NjY5MjgzMDg5LCA0Mi4zNDQ0MTg3NDc0Mjc5XV1dLCBbW1stODMuMDQ1NTQ0NzU1MzE1OCwgNDIuMzQ0Mjk0OTM4Nzg1XSwgWy04My4wNDU2MDEyMTgwMTkyLCA0Mi4zNDQyNDQ3NDU1ODczXSwgWy04My4wNDU3NDU4Njk3OTEyLCA0Mi4zNDQzMzI5MTg4OTAzXSwgWy04My4wNDU4MzA1ODM0ODAyLCA0Mi4zNDQzNjg0ODQxMzQ2XSwgWy04My4wNDU5ODA2OTQzNTg1LCA0Mi4zNDQzOTcwMTM3NzU4XSwgWy04My4wNDY3NjYyNzM3MTg4LCA0Mi4zNDQ0NTU5NDEzMjkxXSwgWy04My4wNDY4MjczMDc2MjgyLCA0Mi4zNDQ0OTEyMTY5MDAyXSwgWy04My4wNDc1NTgyOTIzNDIyLCA0Mi4zNDU1OTY0NTkyMDA0XSwgWy04My4wNDc1ODUyMjIzOTk4LCA0Mi4zNDU2NDY1ODAwMjA4XSwgWy04My4wNDY1MTU1MDE3NDMyLCA0Mi4zNDYwNDI1ODM5NjEyXSwgWy04My4wNDU1NTE2MTgzMDIxLCA0Mi4zNDYzOTM3MTczMzY2XSwgWy04My4wNDQ5MjI1ODcyMTY1LCA0Mi4zNDU0NDcwMjY5NzM5XSwgWy04My4wNDQ4NzQ4OTc2NTY3LCA0Mi4zNDUzMzc2MDU5OTY5XSwgWy04My4wNDQ4NjM5MTc4ODc0LCA0Mi4zNDUxNjYwMTgwNjI2XSwgWy04My4wNDQ4OTcyMjQ0OTc5LCA0Mi4zNDUwNTQzMzU5MDIzXSwgWy04My4wNDQ5MzY3MjQ4MDc5LCA0Mi4zNDQ5ODQwMDY4NDA1XSwgWy04My4wNDU1NDQ3NTUzMTU4LCA0Mi4zNDQyOTQ5Mzg3ODVdXV0sIFtbWy04My4wNDY1NTY1NjAxNTU0LCA0Mi4zNDYxMDQwNTUxMzY5XSwgWy04My4wNDc2MTk1Njc4MzUxLCA0Mi4zNDU3MTA1MzYyMzQ0XSwgWy04My4wNDc2NzA5MzIyOTQ0LCA0Mi4zNDU4MDU5MDkxNDQ3XSwgWy04My4wNDg0NDEwNTc0NjQ2LCA0Mi4zNDY5NTc3MjgxMTQ2XSwgWy04My4wNDYzOTc1NzkyMjgzLCA0Mi4zNDc2NzkzODczOTA5XSwgWy04My4wNDU1OTIzMzk1OTc3LCA0Mi4zNDY0NTUzMTE5MDIyXSwgWy04My4wNDY1NTY1NjAxNTU0LCA0Mi4zNDYxMDQwNTUxMzY5XV1dXX0sICJ0YXNrcyI6IHsidHlwZSI6ICJGZWF0dXJlQ29sbGVjdGlvbiIsICJmZWF0dXJlcyI6IFt7InR5cGUiOiAiRmVhdHVyZSIsICJnZW9tZXRyeSI6IHsidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbW1tbLTgzLjA0NTU0NDc1NTMxNTgsIDQyLjM0NDI5NDkzODc4NV0sIFstODMuMDQ1NjAxMjE4MDE5MiwgNDIuMzQ0MjQ0NzQ1NTg3M10sIFstODMuMDQ1NzQ1ODY5NzkxMiwgNDIuMzQ0MzMyOTE4ODkwM10sIFstODMuMDQ1ODMwNTgzNDgwMiwgNDIuMzQ0MzY4NDg0MTM0Nl0sIFstODMuMDQ1OTgwNjk0MzU4NSwgNDIuMzQ0Mzk3MDEzNzc1OF0sIFstODMuMDQ2NzY2MjczNzE4OCwgNDIuMzQ0NDU1OTQxMzI5MV0sIFstODMuMDQ2ODI3MzA3NjI4MiwgNDIuMzQ0NDkxMjE2OTAwMl0sIFstODMuMDQ3NTU4MjkyMzQyMiwgNDIuMzQ1NTk2NDU5MjAwNF0sIFstODMuMDQ3NTg1MjIyMzk5OCwgNDIuMzQ1NjQ2NTgwMDIwOF0sIFstODMuMDQ2NTE1NTAxNzQzMiwgNDIuMzQ2MDQyNTgzOTYxMl0sIFstODMuMDQ1NTUxNjE4MzAyMSwgNDIuMzQ2MzkzNzE3MzM2Nl0sIFstODMuMDQ0OTIyNTg3MjE2NSwgNDIuMzQ1NDQ3MDI2OTczOV0sIFstODMuMDQ0ODc0ODk3NjU2NywgNDIuMzQ1MzM3NjA1OTk2OV0sIFstODMuMDQ0ODYzOTE3ODg3NCwgNDIuMzQ1MTY2MDE4MDYyNl0sIFstODMuMDQ0ODk3MjI0NDk3OSwgNDIuMzQ1MDU0MzM1OTAyM10sIFstODMuMDQ0OTM2NzI0ODA3OSwgNDIuMzQ0OTg0MDA2ODQwNV0sIFstODMuMDQ1NTQ0NzU1MzE1OCwgNDIuMzQ0Mjk0OTM4Nzg1XV1dXX0sICJwcm9wZXJ0aWVzIjogeyJ0YXNrSWQiOiA0LCAidGFza1giOiBudWxsLCAidGFza1kiOiBudWxsLCAidGFza1pvb20iOiBudWxsLCAidGFza1NwbGl0dGFibGUiOiBmYWxzZSwgInRhc2tTdGF0dXMiOiAiUkVBRFkifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIk11bHRpUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFtbW1stODMuMDQ2ODY2OTI4MzA4OSwgNDIuMzQ0NDE4NzQ3NDI3OV0sIFstODMuMDQ2NzgxMzMwNDEzMSwgNDIuMzQ0Mzg4MTE4NjE2M10sIFstODMuMDQ1OTkxODcwMzYzNywgNDIuMzQ0MzI4OTAwMTg0OF0sIFstODMuMDQ1ODAxNDU3NDE2NSwgNDIuMzQ0Mjc4MDExNjgyMV0sIFstODMuMDQ1NjYwNDA1NDIyNCwgNDIuMzQ0MTkyMDMyMzI1Nl0sIFstODMuMDQ1ODUzMDMxMjEzNCwgNDIuMzQ0MDIwMTY0NDk5M10sIFstODMuMDQ1OTg5OTk2NTE4MSwgNDIuMzQzOTQzMzAzMzYwNl0sIFstODMuMDQ4MDQxMDk5Nzk0NCwgNDIuMzQzMjkzNzkwMTA0XSwgWy04My4wNDgwOTk3NjM0MzcsIDQyLjM0MzI3MzA0Mzg2MTRdLCBbLTgzLjA0ODg3MjQ3NTcwNjYsIDQyLjM0NDQ0Mjk5NzQ0NTJdLCBbLTgzLjA0OTI2NTEyMjgyNjQsIDQyLjM0NTAzMzA5MDU4OTVdLCBbLTgzLjA1MDE0Mzc5OTk5NjQsIDQyLjM0NjM2MTE4MDYyOTVdLCBbLTgzLjA0ODUyNDYzMzU4OTMsIDQyLjM0NjkyODMzMDg0NDddLCBbLTgzLjA0Nzc1NDYyMjU2OTMsIDQyLjM0NTc3NjY4Mzk1ODddLCBbLTgzLjA0NzY0MjEyNjc0MjgsIDQyLjM0NTU2NzQ2ODA4MDJdLCBbLTgzLjA0NjkwODM3MjA5OTgsIDQyLjM0NDQ1ODA0MjM0MzldLCBbLTgzLjA0Njg2NjkyODMwODksIDQyLjM0NDQxODc0NzQyNzldXV1dfSwgInByb3BlcnRpZXMiOiB7InRhc2tJZCI6IDMsICJ0YXNrWCI6IG51bGwsICJ0YXNrWSI6IG51bGwsICJ0YXNrWm9vbSI6IG51bGwsICJ0YXNrU3BsaXR0YWJsZSI6IGZhbHNlLCAidGFza1N0YXR1cyI6ICJSRUFEWSJ9fSwgeyJ0eXBlIjogIkZlYXR1cmUiLCAiZ2VvbWV0cnkiOiB7InR5cGUiOiAiTXVsdGlQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogW1tbWy04My4wNDY1NTY1NjAxNTU0LCA0Mi4zNDYxMDQwNTUxMzY5XSwgWy04My4wNDc2MTk1Njc4MzUxLCA0Mi4zNDU3MTA1MzYyMzQ0XSwgWy04My4wNDc2NzA5MzIyOTQ0LCA0Mi4zNDU4MDU5MDkxNDQ3XSwgWy04My4wNDg0NDEwNTc0NjQ2LCA0Mi4zNDY5NTc3MjgxMTQ2XSwgWy04My4wNDYzOTc1NzkyMjgzLCA0Mi4zNDc2NzkzODczOTA5XSwgWy04My4wNDU1OTIzMzk1OTc3LCA0Mi4zNDY0NTUzMTE5MDIyXSwgWy04My4wNDY1NTY1NjAxNTU0LCA0Mi4zNDYxMDQwNTUxMzY5XV1dXX0sICJwcm9wZXJ0aWVzIjogeyJ0YXNrSWQiOiAyLCAidGFza1giOiBudWxsLCAidGFza1kiOiBudWxsLCAidGFza1pvb20iOiBudWxsLCAidGFza1NwbGl0dGFibGUiOiBmYWxzZSwgInRhc2tTdGF0dXMiOiAiUkVBRFkifX0sIHsidHlwZSI6ICJGZWF0dXJlIiwgImdlb21ldHJ5IjogeyJ0eXBlIjogIk11bHRpUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFtbW1stODMuMDQ3OTQyMzg3NzIwMiwgNDIuMzQyNDEzNDUwNzg2NF0sIFstODMuMDQ4NzQwMDQ2OTY2OCwgNDIuMzQyMDA3ODgwMTk1NF0sIFstODMuMDQ4NzcwNDA2MDI3NywgNDIuMzQyMDUzNzA0MjA4N10sIFstODMuMDQ4NTE1NDc4Njg4OSwgNDIuMzQyMTk5OTY1OTI4NF0sIFstODMuMDQ4MDI4OTkyMzAyOCwgNDIuMzQyNDcxMDI4ODE0NV0sIFstODMuMDQ3ODA4NjM4MTcyLCA0Mi4zNDI1ODA1MDc1MTkyXSwgWy04My4wNDc3ODE2NTg3Njg5LCA0Mi4zNDI2NTg0MTU5MDQ3XSwgWy04My4wNDc3ODY2MTg1Nzg5LCA0Mi4zNDI3MjQ2MDIxMjM0XSwgWy04My4wNDc4NTU2MDQxNDg3LCA0Mi4zNDI4MzExODcyNDI4XSwgWy04My4wNDgwNjE5OTYzMjMzLCA0Mi4zNDMyMTAzOTk1MzM3XSwgWy04My4wNDgwMDM4ODk2MzAzLCA0Mi4zNDMyMzA5ODI5NTE2XSwgWy04My4wNDU5NTAyNTEyODc4LCA0Mi4zNDM4ODEyOTg4OTAyXSwgWy04My4wNDU3ODQ0MDAyMDQ2LCA0Mi4zNDM5NzQwOTk1Mjg2XSwgWy04My4wNDU0Njg4NTAxNTYxLCA0Mi4zNDQyNTU3MDEzNjhdLCBbLTgzLjA0NDg1NzAwMzgwNTMsIDQyLjM0NDk0OTA5MzM1MzldLCBbLTgzLjA0NDgxMDc1NDc1ODgsIDQyLjM0NTAyOTkxOTk2NDZdLCBbLTgzLjA0NDc3MTc0MjA1MzUsIDQyLjM0NTE2MDE4MDM2OTNdLCBbLTgzLjA0NDc3MTMxODI3NTMsIDQyLjM0NTI4OTQ5NzMyNjhdLCBbLTgzLjA0NDgzODY4NTYyNzEsIDQyLjM0NTQ3NTkyNzA3NTddLCBbLTgzLjA0NTQ4OTA3OTQxMjcsIDQyLjM0NjQ1NDc2OTgzNzRdLCBbLTgzLjA0NjMxNDMyMDA2NjksIDQyLjM0NzcwOTI1NTAxNjhdLCBbLTgzLjA0NjAwMTgzMTg3NCwgNDIuMzQ3ODIzMDg1MjgwOV0sIFstODMuMDQ1MDQ1Mzg1MTM3LCA0Mi4zNDY0MzQ1NDA3NjE1XSwgWy04My4wNDQ5Mjg2NDcwNDM3LCA0Mi4zNDYxNDUwNjI2MjMyXSwgWy04My4wNDQ3NTc5ODc1Njc4LCA0Mi4zNDU3NDc0ODA5Njk0XSwgWy04My4wNDQ3MTA3NDMxMzM4LCA0Mi4zNDU1NTM5NTk4NjU2XSwgWy04My4wNDQ2OTI2MDM3NzEzLCA0Mi4zNDUzNDI3NDUzMjQ1XSwgWy04My4wNDQ3MTE1OTI1ODAzLCA0Mi4zNDUxMTU4Mjk3ODA2XSwgWy04My4wNDQ3NDM3NTQwMDQzLCA0Mi4zNDQ5OTE0NTc0ODg0XSwgWy04My4wNDQ4MzUxMTQ2NDk1LCA0Mi4zNDQ3ODA3ODAwODYzXSwgWy04My4wNDQ5NjgxNDE5MjI1LCA0Mi4zNDQ1ODQ2NzgzNjg1XSwgWy04My4wNDU3NjA0MDAwMzE3LCA0Mi4zNDM4ODUzNTA2NzddLCBbLTgzLjA0NjA5MDg0NTIxMzQsIDQyLjM0MzU2OTMyODY1NjZdLCBbLTgzLjA0NjU3MjgxNTkzNjcsIDQyLjM0MzE2MTk3OTg3NDddLCBbLTgzLjA0Njc5NjY5NzI0NTIsIDQyLjM0Mjk5ODYwMDI2NDJdLCBbLTgzLjA0Nzk0MjM4NzcyMDIsIDQyLjM0MjQxMzQ1MDc4NjRdXV1dfSwgInByb3BlcnRpZXMiOiB7InRhc2tJZCI6IDEsICJ0YXNrWCI6IG51bGwsICJ0YXNrWSI6IG51bGwsICJ0YXNrWm9vbSI6IG51bGwsICJ0YXNrU3BsaXR0YWJsZSI6IGZhbHNlLCAidGFza1N0YXR1cyI6ICJSRUFEWSJ9fV19LCAiZGVmYXVsdExvY2FsZSI6ICJlbiIsICJwcm9qZWN0SW5mbyI6IHsibG9jYWxlIjogImVuIiwgIm5hbWUiOiAiSW1wcm92ZSBEZXRyb2l0IFBPSXM6IERvdWdsYXNzIiwgInNob3J0RGVzY3JpcHRpb24iOiAiVXNlIHByb3ZpZGVkIHZlY3RvciB0aWxlIGxheWVycyBhbmQgc3RyZWV0IGxldmVsIGltYWdlcnkgZnJvbSBNYXBpbGxhcnksIE9wZW5TdHJlZXRDYW0gYW5kIE1pY3Jvc29mdCB0byBhZGQgcGxhY2VzIG9mIGludGVyZXN0IChidXNpbmVzc2VzLCBjaHVyY2hlcywgZXRjKSIsICJkZXNjcmlwdGlvbiI6ICJPbmUgb2YgdGhlIG1haW4gZ29hbHMgb2YgdGhlIERldHJvaXQgTWFwcGluZyBDaGFsbGVuZ2UgaXMgdG8gaW1wcm92ZSB0aGUgUE9JIGNvdmVyYWdlIGluIHRoZSByZWdpb24uIFRoaXMgaW5jbHVkZXMgY29tbWVyY2lhbCBhbmQgaW5kdXN0cmlhbCBidXNpbmVzc2VzLCByZXN0YXVyYW50cywgYW5kIGFueSBvdGhlciBwb2ludCBvZiBpbnRlcmVzdC4gVXNpbmcgYSBuZXcgSUQgVmVjdG9yIFRpbGUgTGF5ZXIgZmVhdHVyZSBpbiBpRCwgZWRpdG9ycyBjYW4gYWRkIGVpdGhlciBvZiAyIGxheWVycyBjcmVhdGVkIGZvciB0aGlzIGNoYWxsZW5nZS4gVGhlIGZpcnN0IGlzIGJ1c2luZXNzIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBDaXR5IG9mIERldHJvaXQuIFRoZSBzZWNvbmRzIGlzIGFuIGV4cG9ydCBvZiBQT0kncyBmcm9tIGFsbHRoZXBsYWNlcy54eXouIEJvdGggb2YgdGhlc2UgbGF5ZXJzIGhhdmUgdGhlIGxvY2F0aW9uIG9mIHRoZSBwb2ludCB3aXRoIHRoZSBidXNpbmVzcyBuYW1lIGFuZCBhZGRyZXNzZXMgYXMgc3VwcG9ydGluZyBsYWJlbHMuIFVzaW5nIHRoZXNlIGluIGNvbmp1bmN0aW9uIHdpdGggQmluZyBTdHJlZXRzaWRlIEltYWdlcnksIE9wZW5TdHJlZXRDYW0sIGFuZCBNYXBpbGxhcnkgU3RyZWV0LWxldmVsIGltYWdlcywgYW55b25lIGNhbiBwYXJ0aWNpcGF0ZSBmcm9tIGFyb3VuZCB0aGUgd29ybGQuIiwgImluc3RydWN0aW9ucyI6ICJVc2UgdGhlIG1vc3QgcmVjZW50IHNvdXJjZSBkYXRhIGF2YWlsYWJsZSBmcm9tIE1hcGlsbGFyeSwgT3BlblN0cmVldENhbSBvciBNaWNyb3NvZnQgaW4gY29uY2VydCB3aXRoIHByb3ZpZGVkIHZlY3RvciB0aWxlIGxheWVycy5cblxuIyMjIFZlY3RvciBUaWxlIExheWVycyBcbk9uIHRoZSAnTWFwIERhdGEnIHBhbmVsLCB0aGVyZSdzIGEgbmV3IFwiRGV0cm9pdCBWZWN0b3IgVGlsZXMgKEJldGEpXCIgc2VjdGlvbi4gRW5hYmxpbmcgdGhlIGNvbXBvc2l0ZSBsYXllciB0byBkaXNwbGF5IGl0IG9uIHRoZSBtYXAuIFlvdSBjYW4gc2VsZWN0IHRoZSBmZWF0dXJlIHRvIGFjY2VzcyBpdHMgYXR0cmlidXRlcywgd2hpY2ggZGlzcGxheXMgb24gYSBsZWZ0LXNpZGUgcGFuZWwgdW5kZXIgXCJDdXN0b20gTWFwIERhdGFcIi4gIFxuXG4jIyMgU3RyZWV0IExldmVsIEltYWdlcnkgIFxuVG8gdXNlIHN0cmVldCBsZXZlbCBwaG90b3MgZm9yIG1hcHBpbmcsIGNsaWNrIHRoZSBgTWFwIGRhdGFgIHBhbmVsIG9uIHRoZSBzaWRlIG9mIHRoZSBtYXAgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGF2YWlsYWJsZSBwaG90byBsYXllcnMuXG5cbldoZW4gZW5hYmxlZCwgdGhlIHBob3RvIGxheWVyIGRpc3BsYXlzIGEgbGluZSBhbG9uZyB0aGUgc2VxdWVuY2Ugb2YgcGhvdG9zLiBBdCBoaWdoZXIgem9vbSBsZXZlbHMsIGEgY2lyY2xlIG1hcmtzIGF0IGVhY2ggcGhvdG8gbG9jYXRpb24sIGFuZCBhdCBldmVuIGhpZ2hlciB6b29tIGxldmVscywgYSBjb25lIGluZGljYXRlcyB0aGUgZGlyZWN0aW9uIHRoZSBjYW1lcmEgd2FzIGZhY2luZyB3aGVuIHRoZSBwaG90byB3YXMgdGFrZW4uXG5cbldoZW4geW91IGNsaWNrIG9uIG9uZSBvZiB0aGUgcGhvdG8gbG9jYXRpb25zLCBhIHBob3RvIHZpZXdlciBhcHBlYXJzIGluIHRoZSBib3R0b20gY29ybmVyIG9mIHRoZSBtYXAuIFRoZSBwaG90byB2aWV3ZXIgY29udGFpbnMgY29udHJvbHMgdG8gc3RlcCBmb3J3YXJkIGFuZCBiYWNrd2FyZCBpbiB0aGUgaW1hZ2Ugc2VxdWVuY2UuIEl0IGFsc28gc2hvd3MgdGhlIHVzZXJuYW1lIG9mIHRoZSBwZXJzb24gd2hvIGNhcHR1cmVkIHRoZSBpbWFnZSwgdGhlIGRhdGUgaXQgd2FzIGNhcHR1cmVkLCBhbmQgYSBsaW5rIHRvIHZpZXcgdGhlIGltYWdlIG9uIHRoZSBvcmlnaW5hbCBzaXRlLlxuXG4jIyMgRWRpdGluZyBXb3JrZmxvdyAgXG5XaXRoaW4gZWFjaCBibG9jaywgdHJhdmVsIGRvd24gYWxsIHNpZGVzIG9mIHRoZSBzdHJlZXQsIGFuZCBhZGQgUE9JcywgdG8gZW5zdXJlIHRoYXQgeW91J3JlIG5vdCBtaXNzaW5nIGFueXRoaW5nIGluIHBpY3R1cmVzIGJ5IGhhdmluZyB0byBnbyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIGRpZmZlcmVudCBwaG90byBzZXQuIE1vc3Qgc2VxdWVuY2VzIGNvbnRhaW4gcGhvdG9zIG9yaWVudGVkIHRvd2FyZHMgb25seSBvbmUgc2lkZSBvZiB0aGUgc3RyZWV0LiBFbnN1cmUgdGhhdCB0aGUgb2JqZWN0cy9QT0lzIHRoYXQgeW91J3JlIGFkZGluZyBhcmUgb24gdGhlIGNvcnJlY3Qgc2lkZSBvZiB0aGUgc3RyZWV0LiBEb3VibGUgY2hlY2sgdGhlIGxvY2F0aW9uIGJ5IGlkZW50aWZ5aW5nIHRoZSBmZWF0dXJlIGluIGltYWdlcnkuXG5cblRoaW5ncyB0byBsb29rIG91dCBmb3Jcbiogc29tZXRpbWVzIHRoZSBwaWN0dXJlcyBhcmUgdG9vIGJsdXJyeSwgb3IgdGFrZW4gYXQgdGhlIHdyb25nIGFuZ2xlcyBzbyB5b3UncmUgdW5hYmxlIHRvIGlkZW50aWZ5IHRoZSBuYW1lIG9mIHRoZSBidXNpbmVzcyBvciBldmVuIGRldGVybWluZSB0aGUgcGxhY2UncyBwdXJwb3NlIChpcyBpdCBhIHNvY2lhbCBjZW50ZXIsIGEgY2xpbmljPylcbiogdW5hYmxlIHRvIHNvbWV0aW1lcyBrbm93IG1pbm9yIG51YW5jZXMgKHdoZXRoZXIgYSBwbGFjZSBpcyBtb3JlIG9mIGEgcmVzdGF1cmFudCB0aGFuIGNhZmUsIGV0YykuIiwgInBlclRhc2tJbnN0cnVjdGlvbnMiOiAiIn0sICJtYXBwZXJMZXZlbCI6ICJCRUdJTk5FUiIsICJlbmZvcmNlTWFwcGVyTGV2ZWwiOiBmYWxzZSwgImVuZm9yY2VWYWxpZGF0b3JSb2xlIjogZmFsc2UsICJwcml2YXRlIjogZmFsc2UsICJlbnRpdGllc1RvTWFwIjogInBvaW50cyBvZiBpbnRlcmVzdCwgc2lkZXdhbGtzLCBwYXJrIG5hbWVzIiwgImNoYW5nZXNldENvbW1lbnQiOiAiI29zbXVzLXRhc2tzLTY3ICNzb3RtdXMyMDE4IiwgImR1ZURhdGUiOiBudWxsLCAiaW1hZ2VyeSI6IG51bGwsICJtYXBwaW5nVHlwZXMiOiBudWxsLCAiY2FtcGFpZ25UYWciOiAiRGV0cm9pdCIsICJvcmdhbmlzYXRpb25UYWciOiAiT1NNIFVTIiwgImxpY2Vuc2VJZCI6IG51bGwsICJhbGxvd2VkVXNlcm5hbWVzIjogW10sICJwcmlvcml0eUFyZWFzIjogbnVsbCwgImNyZWF0ZWQiOiAiMjAxOC0wOS0wNlQwMDoyMzoyMS40MTY4NTMiLCAibGFzdFVwZGF0ZWQiOiAiMjAxOC0wOS0wN1QxNDoxMToyOC4zNTA0NDgiLCAiYXV0aG9yIjogIkpvbmFoIEFka2lucyIsICJhY3RpdmVNYXBwZXJzIjogMCwgInRhc2tDcmVhdGlvbk1vZGUiOiAiQVJCSVRSQVJZIn0K", "base64"));
  res.end();

  return __filename;
};
