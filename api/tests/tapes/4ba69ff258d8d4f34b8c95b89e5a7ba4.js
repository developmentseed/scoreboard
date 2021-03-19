var path = require("path");

/**
 * GET /api/v2/data/challenge/15285
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "271");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1Mjg1LCJuYW1lIjoiU0RQIGltcG9ydDogTGFuZHNjYXBpbmcgYW5kIEdhcmRlbmluZyBTZXJ2aWNlcyIsImFjdGlvbnMiOnsidG90YWwiOjcyLCJhdmFpbGFibGUiOjUwLCJmaXhlZCI6MTgsImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjgyNTYzLCJ0YXNrc1dpdGhUaW1lIjoyMn19XQ==", "base64"));
  res.end();

  return __filename;
};
