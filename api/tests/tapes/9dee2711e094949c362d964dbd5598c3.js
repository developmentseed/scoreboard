var path = require("path");

/**
 * GET /api/v2/data/challenge/14227
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "275");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjI3LCJuYW1lIjoiTWlzc2luZyBzZXR0bGVtZW50cyBpbiBLb25nby1DZW50cmFsIChEUkMpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzM5NiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MzIwMSwiZmFsc2VQb3NpdGl2ZSI6MTksInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTc2LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTU5NzAsInRhc2tzV2l0aFRpbWUiOjMzOTR9fV0=", "base64"));
  res.end();

  return __filename;
};
