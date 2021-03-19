var path = require("path");

/**
 * GET /api/v2/data/challenge/14296
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "279");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mjk2LCJuYW1lIjoiTXlhbm1hciAoQnVybWEpIC0gRmxvYXRpbmcgV2F5cyAvIERpc2Nvbm5lY3RlZCBSb2FkcyIsImFjdGlvbnMiOnsidG90YWwiOjEwNTcsImF2YWlsYWJsZSI6MTA1MSwiZml4ZWQiOjUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjA5NTUxLCJ0YXNrc1dpdGhUaW1lIjo2fX1d", "base64"));
  res.end();

  return __filename;
};
