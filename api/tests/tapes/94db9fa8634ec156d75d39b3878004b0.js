var path = require("path");

/**
 * GET /api/v2/data/challenge/16938
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "283");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2OTM4LCJuYW1lIjoiTWlzc2luZyBib3dsaW5nIHBpdGNoZXMgZnJvbSBPUyBPcGVuIEdyZWVuc3BhY2UiLCJhY3Rpb25zIjp7InRvdGFsIjoyMzQ0LCJhdmFpbGFibGUiOjE0MDYsImZpeGVkIjo1NDYsImZhbHNlUG9zaXRpdmUiOjMyMywic2tpcHBlZCI6MTAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjIsInRvb0hhcmQiOjM3LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMTQ2MzcsInRhc2tzV2l0aFRpbWUiOjkzOH19XQ==", "base64"));
  res.end();

  return __filename;
};
