var path = require("path");

/**
 * GET /api/v2/data/challenge/14437
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "259");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDM3LCJuYW1lIjoiTmFtZT1cIldhdGVyXCIvXCJ3YXRlclwiIFRhZyBGaXgiLCJhY3Rpb25zIjp7InRvdGFsIjoxOTksImF2YWlsYWJsZSI6MCwiZml4ZWQiOjE2MywiZmFsc2VQb3NpdGl2ZSI6MzEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NjY4MzMsInRhc2tzV2l0aFRpbWUiOjE5OX19XQ==", "base64"));
  res.end();

  return __filename;
};
