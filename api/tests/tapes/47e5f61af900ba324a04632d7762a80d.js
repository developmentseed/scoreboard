var path = require("path");

/**
 * GET /api/v2/data/challenge/16085
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2MDg1LCJuYW1lIjoiTW9zdHkgdyBsdWJlbHNraW0iLCJhY3Rpb25zIjp7InRvdGFsIjoxMzQxLCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMjg1LCJmYWxzZVBvc2l0aXZlIjo3LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQ5LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo2MDk1OCwidGFza3NXaXRoVGltZSI6MTMzOX19XQ==", "base64"));
  res.end();

  return __filename;
};
