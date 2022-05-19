var path = require("path");

/**
 * GET /api/v2/data/challenge/16448
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "280");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQ4LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBIZXNzZW4sIEdlcm1hbnkiLCJhY3Rpb25zIjp7InRvdGFsIjo4NzAsImF2YWlsYWJsZSI6ODUzLCJmaXhlZCI6MTUsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTY2NzYyLCJ0YXNrc1dpdGhUaW1lIjoxN319XQ==", "base64"));
  res.end();

  return __filename;
};
