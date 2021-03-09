var path = require("path");

/**
 * GET /api/v2/data/challenge/15217
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjE3LCJuYW1lIjoiVmVnYW4gcGxhY2VzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjQ5NSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MjA3NSwiZmFsc2VQb3NpdGl2ZSI6MTMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NDA3LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMjQ0NiwidGFza3NXaXRoVGltZSI6MjQ5NX19XQ==", "base64"));
  res.end();

  return __filename;
};
