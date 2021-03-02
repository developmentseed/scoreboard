var path = require("path");

/**
 * GET /api/v2/data/challenge/15358
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
  res.setHeader("content-length", "327");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzU4LCJuYW1lIjoi0KHQstGP0LfQvdC+0YHRgtGMINGA0LXQuiDQsiDQodC10LLQtdGA0L4t0JfQsNC/0LDQtNC90L7QvCDRhNC10LTQtdGA0LDQu9GM0L3QvtC8INC+0LrRgNGD0LPQtSIsImFjdGlvbnMiOnsidG90YWwiOjM0MjQsImF2YWlsYWJsZSI6Mjc0NSwiZml4ZWQiOjYzNywiZmFsc2VQb3NpdGl2ZSI6Mywic2tpcHBlZCI6NSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxNCwidG9vSGFyZCI6MjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQ4OTMyMiwidGFza3NXaXRoVGltZSI6Njc5fX1d", "base64"));
  res.end();

  return __filename;
};
