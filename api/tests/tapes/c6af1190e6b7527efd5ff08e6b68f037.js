var path = require("path");

/**
 * GET /api/v2/data/challenge/14399
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "260");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mzk5LCJuYW1lIjoiU2FpbnRlLU1hcmllLCBSZXVuaW9uIGJ1aWxkaW5nIGNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTE2NDUsImF2YWlsYWJsZSI6MTE2NDUsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
