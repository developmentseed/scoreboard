var path = require("path");

/**
 * GET /api/v2/data/challenge/16916
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "403");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTE2LCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBOb21lcyBkZSBSdWEgZSBBdmVuaWRhcyBhYnJldmlhZGFzIG5vIEVzdGFkbyBkZSBQZXJuYW1idWNvIC0gQnJhc2lsLiAvIENvcnJlY3Rpb24gb2YgU3RyZWV0IE5hbWVzIGFuZCBBYmJyZXZpYXRlZCBBdmVudWVzIGluIHRoZSBTdGF0ZSBvZiBQZXJuYW1idWNvIC0gQnJhemlsLiIsImFjdGlvbnMiOnsidG90YWwiOjEzNDAsImF2YWlsYWJsZSI6NzE2LCJmaXhlZCI6NTM0LCJmYWxzZVBvc2l0aXZlIjo1LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjg1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNDI0MTUsInRhc2tzV2l0aFRpbWUiOjYyM319XQ==", "base64"));
  res.end();

  return __filename;
};
