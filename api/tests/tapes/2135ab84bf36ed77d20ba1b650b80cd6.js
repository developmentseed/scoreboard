var path = require("path");

/**
 * GET /api/v2/data/challenge/14904
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "273");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0OTA0LCJuYW1lIjoiVHVybiBzb2xhciBwYW5lbCBmcm9tIG5vZGUgdG8gYXJlYSAtIEZyYW5jZSIsImFjdGlvbnMiOnsidG90YWwiOjM3NiwiYXZhaWxhYmxlIjoxMDAsImZpeGVkIjoyMjQsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjUsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6NDEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIwNDE5MiwidGFza3NXaXRoVGltZSI6Mjc2fX1d", "base64"));
  res.end();

  return __filename;
};
