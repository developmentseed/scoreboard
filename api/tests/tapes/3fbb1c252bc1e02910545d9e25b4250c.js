var path = require("path");

/**
 * GET /api/v2/data/challenge/14145
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTQ1LCJuYW1lIjoiR2hhbmEgLSBPdmVybGFwcGluZyBXYXlzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTMsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjgsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjI5MjAzLCJ0YXNrc1dpdGhUaW1lIjoxM319XQ==", "base64"));
  res.end();

  return __filename;
};
