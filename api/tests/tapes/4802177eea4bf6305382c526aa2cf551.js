var path = require("path");

/**
 * GET /api/v2/data/challenge/16107
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MTA3LCJuYW1lIjoiTW9zdHkgdyB3b2pld8OzZHp0d2llIHdhcm1pxYRza28gbWF6dXJza2ltIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTY3LCJhdmFpbGFibGUiOjAsImZpeGVkIjo1NjUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzI1MTksInRhc2tzV2l0aFRpbWUiOjU2N319XQ==", "base64"));
  res.end();

  return __filename;
};
