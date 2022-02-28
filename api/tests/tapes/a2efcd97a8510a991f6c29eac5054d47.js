var path = require("path");

/**
 * GET /api/v2/data/challenge/14352
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "265");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzUyLCJuYW1lIjoiTWFwcGluZyBCdWlsZGluZ3MgaW4gT3lvIFRvd24sIE5pZ2VyaWEiLCJhY3Rpb25zIjp7InRvdGFsIjo3NzcsImF2YWlsYWJsZSI6NzU3LCJmaXhlZCI6MTAsImZhbHNlUG9zaXRpdmUiOjUsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDQ5MTA5LCJ0YXNrc1dpdGhUaW1lIjoyMH19XQ==", "base64"));
  res.end();

  return __filename;
};
