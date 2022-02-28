var path = require("path");

/**
 * GET /api/v2/data/challenge/15417
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "260");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDE3LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTIE1pZCBBdGxhbnRpYyIsImFjdGlvbnMiOnsidG90YWwiOjE5MDMsImF2YWlsYWJsZSI6MTg5MiwiZml4ZWQiOjcsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTQ4MzU2NSwidGFza3NXaXRoVGltZSI6MTF9fV0=", "base64"));
  res.end();

  return __filename;
};
