var path = require("path");

/**
 * GET /api/v2/data/challenge/14308
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzA4LCJuYW1lIjoiTmVwYWwgLSBDcm9zc2luZyBSb2FkcyIsImFjdGlvbnMiOnsidG90YWwiOjU0LCJhdmFpbGFibGUiOjAsImZpeGVkIjo0MCwiZmFsc2VQb3NpdGl2ZSI6MTEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjQ4ODkzLCJ0YXNrc1dpdGhUaW1lIjo1NH19XQ==", "base64"));
  res.end();

  return __filename;
};
