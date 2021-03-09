var path = require("path");

/**
 * GET /api/v2/data/challenge/16102
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
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MTAyLCJuYW1lIjoiTW9zdHkgdyBvcG9sc2tpbSIsImFjdGlvbnMiOnsidG90YWwiOjM1NCwiYXZhaWxhYmxlIjoyMTEsImZpeGVkIjoxMzksImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6OTMzNzksInRhc2tzV2l0aFRpbWUiOjE0M319XQ==", "base64"));
  res.end();

  return __filename;
};
