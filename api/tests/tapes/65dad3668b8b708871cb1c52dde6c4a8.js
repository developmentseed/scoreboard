var path = require("path");

/**
 * GET /api/v2/data/challenge/14453
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "289");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDUzLCJuYW1lIjoiQ29ubmVjdCB0aGUgdmlsbGFnZXMgYW5kIHRvd25zIGluIE1haGFidWJuYWdhciBkaXN0cmljdCwgVEcgSW5kaWEiLCJhY3Rpb25zIjp7InRvdGFsIjo4NywiYXZhaWxhYmxlIjo3NywiZml4ZWQiOjYsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjMsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTMzNTQ3LCJ0YXNrc1dpdGhUaW1lIjoxMH19XQ==", "base64"));
  res.end();

  return __filename;
};
