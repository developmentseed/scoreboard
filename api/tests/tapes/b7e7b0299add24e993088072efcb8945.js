var path = require("path");

/**
 * GET /api/v2/data/challenge/14378
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mzc4LCJuYW1lIjoiQnVzIHN0b3BzIG5lZWRpbmcgdmFsaWRhdGlvbiIsImFjdGlvbnMiOnsidG90YWwiOjcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTA3OTQ2LCJ0YXNrc1dpdGhUaW1lIjo3fX1d", "base64"));
  res.end();

  return __filename;
};
