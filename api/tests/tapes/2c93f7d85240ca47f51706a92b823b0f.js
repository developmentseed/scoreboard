var path = require("path");

/**
 * GET /api/v2/data/challenge/15896
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "275");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1ODk2LCJuYW1lIjoiQWRkIE1pc3NpbmcgQnVpbGRpbmdzIC0gSW5kaWEgKE5BS1NIQSAyMDIxKSIsImFjdGlvbnMiOnsidG90YWwiOjI1MzgsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIzMTksImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjE4LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMTk3MjcsInRhc2tzV2l0aFRpbWUiOjI1MzZ9fV0=", "base64"));
  res.end();

  return __filename;
};
