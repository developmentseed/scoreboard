var path = require("path");

/**
 * GET /api/v2/data/challenge/14120
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTIwLCJuYW1lIjoiQ2FtYm9kaWEgLSBTaGFycCBBbmdsZSBSb2FkcyIsImFjdGlvbnMiOnsidG90YWwiOjEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjgxNjAwLCJ0YXNrc1dpdGhUaW1lIjoxfX1d", "base64"));
  res.end();

  return __filename;
};
