var path = require("path");

/**
 * GET /api/v2/data/challenge/14224
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
  res.setHeader("content-length", "251");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjI0LCJuYW1lIjoiRWd5cHQgLSBDb25uZWN0aXZpdHkgQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjo0MywiYXZhaWxhYmxlIjowLCJmaXhlZCI6MjksImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTEsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjUwNDIxOCwidGFza3NXaXRoVGltZSI6NDN9fV0=", "base64"));
  res.end();

  return __filename;
};
