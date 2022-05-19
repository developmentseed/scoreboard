var path = require("path");

/**
 * GET /api/v2/data/challenge/15336
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "253");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzM2LCJuYW1lIjoiVHVya2V5IEFpcnBvcnRzIENoYWxsZW5nZS0xIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTA2LCJhdmFpbGFibGUiOjEwMCwiZml4ZWQiOjYsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjQxOTY0OSwidGFza3NXaXRoVGltZSI6Nn19XQ==", "base64"));
  res.end();

  return __filename;
};
