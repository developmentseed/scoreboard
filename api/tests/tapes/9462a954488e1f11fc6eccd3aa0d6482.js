var path = require("path");

/**
 * GET /api/v2/data/challenge/16110
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MTEwLCJuYW1lIjoiTW9zdHkgdyDFm2zEhXNraW0iLCJhY3Rpb25zIjp7InRvdGFsIjoxNjIyLCJhdmFpbGFibGUiOjE0MTMsImZpeGVkIjoyMDAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjgsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzgyNjEsInRhc2tzV2l0aFRpbWUiOjIwOX19XQ==", "base64"));
  res.end();

  return __filename;
};
