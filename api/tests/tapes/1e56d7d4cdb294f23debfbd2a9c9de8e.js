var path = require("path");

/**
 * GET /api/v2/data/challenge/15260
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "277");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjYwLCJuYW1lIjoiU0RQIGltcG9ydDogQmFua3MgYW5kIE90aGVyIEZpbmFuY2lhbCBJbnN0aXR1dGlvbnMiLCJhY3Rpb25zIjp7InRvdGFsIjo1NTcsImF2YWlsYWJsZSI6NDY2LCJmaXhlZCI6NzQsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjYsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6OSwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NjIyOTkzLCJ0YXNrc1dpdGhUaW1lIjo5MX19XQ==", "base64"));
  res.end();

  return __filename;
};
