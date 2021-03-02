var path = require("path");

/**
 * GET /api/v2/data/challenge/15246
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "256");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjQ2LCJuYW1lIjoiU0RQIGltcG9ydDogQmFycyBhbmQgbmlnaHRjbHVicyIsImFjdGlvbnMiOnsidG90YWwiOjY5LCJhdmFpbGFibGUiOjU4LCJmaXhlZCI6MTAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjQ3MzQ4LCJ0YXNrc1dpdGhUaW1lIjoxMX19XQ==", "base64"));
  res.end();

  return __filename;
};
