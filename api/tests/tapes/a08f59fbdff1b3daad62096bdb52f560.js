var path = require("path");

/**
 * GET /api/v2/data/challenge/16466
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "293");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDY2LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBSaGVpbmxhbmQtUGZhbHosIEdlcm1hbnkiLCJhY3Rpb25zIjp7InRvdGFsIjo3MjksImF2YWlsYWJsZSI6NzYsImZpeGVkIjo1ODksImZhbHNlUG9zaXRpdmUiOjIwLCJza2lwcGVkIjoxNywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyNCwidG9vSGFyZCI6MywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjYxOTc3LCJ0YXNrc1dpdGhUaW1lIjo2NTN9fV0=", "base64"));
  res.end();

  return __filename;
};
