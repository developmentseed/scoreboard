var path = require("path");

/**
 * GET /api/v2/data/challenge/14353
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "259");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzUzLCJuYW1lIjoiRGVubWFyayAtIEFkZCBicmFuZCB0YWdzIHRvIE5ldHRvIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjEzLCJhdmFpbGFibGUiOjAsImZpeGVkIjoyMTMsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTczNTcsInRhc2tzV2l0aFRpbWUiOjIxM319XQ==", "base64"));
  res.end();

  return __filename;
};
