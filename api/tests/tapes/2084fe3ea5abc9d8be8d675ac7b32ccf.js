var path = require("path");

/**
 * GET /api/v2/data/challenge/14263
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "287");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjYzLCJuYW1lIjoiQ2hlY2sgZm9yIGdhbWluZyBjZW50cmVzIHdyb25nbHkgdGFnZ2VkIGFzIGFyY2FkZXMgaW4gR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjEyNiwiYXZhaWxhYmxlIjo1OSwiZml4ZWQiOjMyLCJmYWxzZVBvc2l0aXZlIjo1LCJza2lwcGVkIjoyOSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNjQ1MiwidGFza3NXaXRoVGltZSI6Njd9fV0=", "base64"));
  res.end();

  return __filename;
};
