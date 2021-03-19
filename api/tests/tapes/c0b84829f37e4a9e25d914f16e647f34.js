var path = require("path");

/**
 * GET /api/v2/data/challenge/14023
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "255");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MDIzLCJuYW1lIjoiS3lyZ3l6c3RhbiAtIENvbm5lY3Rpdml0eSBDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjQ3LCJhdmFpbGFibGUiOjI1LCJmaXhlZCI6MTAsImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6OSwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6Nzg5OTQsInRhc2tzV2l0aFRpbWUiOjIyfX1d", "base64"));
  res.end();

  return __filename;
};
