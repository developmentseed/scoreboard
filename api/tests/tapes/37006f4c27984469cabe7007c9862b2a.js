var path = require("path");

/**
 * GET /api/v2/data/challenge/16910
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
  res.setHeader("content-length", "264");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTEwLCJuYW1lIjoiYnRlY2ZfVVNfSW50ZXJzZWN0aW9uQXREaWZmZXJlbnRMZXZlbHNDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTIzNTA5LCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
