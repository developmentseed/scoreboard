var path = require("path");

/**
 * GET /api/v2/data/challenge/14108
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "247");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTA4LCJuYW1lIjoiQmVsaXplIC0gQ29ubmVjdGl2aXR5IENoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo4MjE3NSwidGFza3NXaXRoVGltZSI6NX19XQ==", "base64"));
  res.end();

  return __filename;
};
