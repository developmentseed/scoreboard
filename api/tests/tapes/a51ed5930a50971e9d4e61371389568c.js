var path = require("path");

/**
 * GET /api/v2/data/challenge/15354
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
  res.setHeader("content-length", "315");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzU0LCJuYW1lIjoi0KHQstGP0LfQvdC+0YHRgtGMINGA0LXQuiDQsiDQptC10L3RgtGA0LDQu9GM0L3QvtC8INGE0LXQtNC10YDQsNC70YzQvdC+0Lwg0L7QutGA0YPQs9C1IiwiYWN0aW9ucyI6eyJ0b3RhbCI6NzMzLCJhdmFpbGFibGUiOjAsImZpeGVkIjo3MDMsImZhbHNlUG9zaXRpdmUiOjgsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjIsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQ0OTIyMywidGFza3NXaXRoVGltZSI6NzMzfX1d", "base64"));
  res.end();

  return __filename;
};
