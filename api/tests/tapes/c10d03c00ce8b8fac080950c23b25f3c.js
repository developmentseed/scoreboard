var path = require("path");

/**
 * GET /api/v2/data/challenge/14628
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "267");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NjI4LCJuYW1lIjoiRXh0cmFjdCBnaXZlIHdheSBmcm9tIHJvdW5kYWJvdXQgLSBGcmFuY2UiLCJhY3Rpb25zIjp7InRvdGFsIjoxMzgsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjQ5LCJmYWxzZVBvc2l0aXZlIjo4OSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo4ODU3MiwidGFza3NXaXRoVGltZSI6MTM4fX1d", "base64"));
  res.end();

  return __filename;
};
