var path = require("path");

/**
 * GET /api/v2/data/challenge/15919
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "287");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTE5LCJuYW1lIjoiTWFyaWNvcGEgQ291bnR5IGFtZW5pdHk9cGxhY2Vfb2Zfd29yc2hpcCBub2RlcyBpbnRvIHBvbHlnb25zIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTQ4LCJhdmFpbGFibGUiOjQ0OSwiZml4ZWQiOjU5LCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjo0LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjMsInRvb0hhcmQiOjMwLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo4NDE5NywidGFza3NXaXRoVGltZSI6OTl9fV0=", "base64"));
  res.end();

  return __filename;
};
