var path = require("path");

/**
 * GET /api/v2/data/challenge/15264
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
  res.setHeader("content-length", "321");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjY0LCJuYW1lIjoiU0RQIGltcG9ydDogTWlzYy4gUGVyc29uYWwgU2VydmljZXMgKE1hc3NhZ2UsIFdheGluZywgVGFubmluZywgVGF0dG9vLCBza2luY2FyZSwgcGllcmNpbmcsIGV0Yy4pIiwiYWN0aW9ucyI6eyJ0b3RhbCI6Mzk4LCJhdmFpbGFibGUiOjM5NywiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTMyMjEwLCJ0YXNrc1dpdGhUaW1lIjoxfX1d", "base64"));
  res.end();

  return __filename;
};
