var path = require("path");

/**
 * GET /api/v2/data/challenge/14221
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "279");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjIxLCJuYW1lIjoiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28gLSBPdmVybGFwcGluZyBXYXlzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NzE1LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMzAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NTg1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo1NzA0OCwidGFza3NXaXRoVGltZSI6NzE0fX1d", "base64"));
  res.end();

  return __filename;
};
