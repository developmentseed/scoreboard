var path = require("path");

/**
 * GET /api/v2/data/challenge/16866
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "253");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2ODY2LCJuYW1lIjoiSU5FUERBVEEgLSBCdXJpdGkgQnJhdm8gTUEiLCJhY3Rpb25zIjp7InRvdGFsIjoxODksImF2YWlsYWJsZSI6MCwiZml4ZWQiOjE2OSwiZmFsc2VQb3NpdGl2ZSI6MTIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6OCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6Mzg3OTcsInRhc2tzV2l0aFRpbWUiOjE4OX19XQ==", "base64"));
  res.end();

  return __filename;
};
