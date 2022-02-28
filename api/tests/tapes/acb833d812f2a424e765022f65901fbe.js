var path = require("path");

/**
 * GET /api/v2/data/challenge/15356
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "307");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzU2LCJuYW1lIjoi0KHQstGP0LfQvdC+0YHRgtGMINGA0LXQuiDQsiDQrtC20L3QvtC8INGE0LXQtNC10YDQsNC70YzQvdC+0Lwg0L7QutGA0YPQs9C1IiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTM4OCwiYXZhaWxhYmxlIjoxMTczLCJmaXhlZCI6MTc0LCJmYWxzZVBvc2l0aXZlIjoyNSwic2tpcHBlZCI6MywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo3LCJ0b29IYXJkIjo2LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0NzMzMDYsInRhc2tzV2l0aFRpbWUiOjIxNX19XQ==", "base64"));
  res.end();

  return __filename;
};
