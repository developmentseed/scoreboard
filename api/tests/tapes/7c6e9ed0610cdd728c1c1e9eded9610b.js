var path = require("path");

/**
 * GET /api/v2/data/challenge/16420
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDIwLCJuYW1lIjoiV2F0ZXJ3YXkgc3R1YnMgUG9sYW5kIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjE0MSwiYXZhaWxhYmxlIjoyMTEzLCJmaXhlZCI6MjYsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDUwNzMsInRhc2tzV2l0aFRpbWUiOjI4fX1d", "base64"));
  res.end();

  return __filename;
};
