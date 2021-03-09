var path = require("path");

/**
 * GET /api/v2/data/challenge/15890
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "265");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1ODkwLCJuYW1lIjoiVElHRVIgQ2xlYW51cCBpbiBQZW5kbGV0b24gQ291bnR5IEtZIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTU4MSwiYXZhaWxhYmxlIjoxNTA0LCJmaXhlZCI6NzYsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjYwMzQwLCJ0YXNrc1dpdGhUaW1lIjo3N319XQ==", "base64"));
  res.end();

  return __filename;
};
