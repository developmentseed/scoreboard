var path = require("path");

/**
 * GET /api/v2/data/challenge/15405
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDA1LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLU5WIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDU1LCJhdmFpbGFibGUiOjQ1MiwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTA2NTY5LCJ0YXNrc1dpdGhUaW1lIjozfX1d", "base64"));
  res.end();

  return __filename;
};
