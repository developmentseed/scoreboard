var path = require("path");

/**
 * GET /api/v2/data/challenge/16441
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "289");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2NDQxLCJuYW1lIjoiQWRkIG1pc3Npbmcgc2hhcmVkIGFuZCBiaWN5Y2xlIHBhdGggc3VyZmFjZXMgaW4gTWVsYm91cm5lIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NzY1MiwiYXZhaWxhYmxlIjo3NDg5LCJmaXhlZCI6MTQ4LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjo0LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjExLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjcxNzgsInRhc2tzV2l0aFRpbWUiOjE2M319XQ==", "base64"));
  res.end();

  return __filename;
};
