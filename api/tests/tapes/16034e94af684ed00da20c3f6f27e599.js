var path = require("path");

/**
 * GET /api/v2/data/challenge/16091
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDkxLCJuYW1lIjoiTW9zdHkgdyBwb21vcnNraW0iLCJhY3Rpb25zIjp7InRvdGFsIjo2NDksImF2YWlsYWJsZSI6NTI5LCJmaXhlZCI6MTEwLCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjUsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjExMzAxNywidGFza3NXaXRoVGltZSI6MTIwfX1d", "base64"));
  res.end();

  return __filename;
};
