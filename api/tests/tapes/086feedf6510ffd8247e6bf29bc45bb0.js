var path = require("path");

/**
 * GET /api/v2/data/challenge/16463
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
  res.setHeader("content-length", "294");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDYzLCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyBpbiByZXNpZGVudGlhbCBhcmVhcyBpbiBNZWNrbGVuYnVyZy1Wb3Jwb21tZXJuLCBHZXJtYW55IiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzAwLCJhdmFpbGFibGUiOjI5MywiZml4ZWQiOjMsImZhbHNlUG9zaXRpdmUiOjQsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTAzNDQxLCJ0YXNrc1dpdGhUaW1lIjo3fX1d", "base64"));
  res.end();

  return __filename;
};
