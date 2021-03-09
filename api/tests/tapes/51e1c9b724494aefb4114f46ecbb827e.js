var path = require("path");

/**
 * GET /api/v2/data/challenge/15415
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDE1LCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLU1pZHdlc3QiLCJhY3Rpb25zIjp7InRvdGFsIjo0NjI2LCJhdmFpbGFibGUiOjQzNzMsImZpeGVkIjoyNDYsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjMsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTQwOTIzLCJ0YXNrc1dpdGhUaW1lIjoyNTN9fV0=", "base64"));
  res.end();

  return __filename;
};
