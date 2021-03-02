var path = require("path");

/**
 * GET /api/v2/data/challenge/15891
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "344");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1ODkxLCJuYW1lIjoiSW5jbHVzw6NvIGRlIGVuZGVyZcOnb3MgZSAvIG91IENvcnJlw6fDo28gZGUgZW5kZXJlw6dvcyBxdWUgasOhIGV4aXN0ZW0gZW0gUHJlZmVpdHVyYXMgbm8gRXN0YWRvIGRlIFBlcm5hbWJ1Y28gLSBCcmFzaWwuIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjAxLCJhdmFpbGFibGUiOjE5OSwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6Nzc5ODAsInRhc2tzV2l0aFRpbWUiOjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
