var path = require("path");

/**
 * GET /api/v2/data/challenge/14742
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "251");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NzQyLCJuYW1lIjoiQWRkIENhdHRsZSBHdWFyZHMgaW4gVXRhaCIsImFjdGlvbnMiOnsidG90YWwiOjY0OCwiYXZhaWxhYmxlIjo2MzQsImZpeGVkIjo1LCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIxNTM0NSwidGFza3NXaXRoVGltZSI6MTR9fV0=", "base64"));
  res.end();

  return __filename;
};
