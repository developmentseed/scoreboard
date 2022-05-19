var path = require("path");

/**
 * GET /api/v2/data/challenge/14404
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDA0LCJuYW1lIjoiU2FpbnQtUGhpbGlwcGUsIFJldW5pb24gQnVpbGRpbmcgQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoyMTc1LCJhdmFpbGFibGUiOjE3ODMsImZpeGVkIjozODUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NywidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6OTA1NDksInRhc2tzV2l0aFRpbWUiOjM5MX19XQ==", "base64"));
  res.end();

  return __filename;
};
