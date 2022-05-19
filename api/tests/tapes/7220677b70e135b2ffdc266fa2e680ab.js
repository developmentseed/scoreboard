var path = require("path");

/**
 * GET /api/v2/data/challenge/14505
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "273");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NTA1LCJuYW1lIjoiUGxhY2VzIG9mIHdvcnNoaXAgd2l0aG91dCByZWxpZ2lvbiAtIEZyYW5jZSIsImFjdGlvbnMiOnsidG90YWwiOjE5MjYsImF2YWlsYWJsZSI6MTg1MCwiZml4ZWQiOjQ2LCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjoxNiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo2LCJ0b29IYXJkIjo3LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMjU0MjAsInRhc2tzV2l0aFRpbWUiOjc2fX1d", "base64"));
  res.end();

  return __filename;
};
