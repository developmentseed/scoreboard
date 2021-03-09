var path = require("path");

/**
 * GET /api/v2/data/challenge/15359
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
  res.setHeader("content-length", "312");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzU5LCJuYW1lIjoi0KHQstGP0LfQvdC+0YHRgtGMINGA0LXQuiDQsiDQo9GA0LDQu9GM0YHQutC+0Lwg0YTQtdC00LXRgNCw0LvRjNC90L7QvCDQvtC60YDRg9Cz0LUiLCJhY3Rpb25zIjp7InRvdGFsIjoxMDgzLCJhdmFpbGFibGUiOjEwNDMsImZpeGVkIjozNiwiZmFsc2VQb3NpdGl2ZSI6Mywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0ODE0MzYsInRhc2tzV2l0aFRpbWUiOjQwfX1d", "base64"));
  res.end();

  return __filename;
};
