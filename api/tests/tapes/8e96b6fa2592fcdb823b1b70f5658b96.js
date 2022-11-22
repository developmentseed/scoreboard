var path = require("path");

/**
 * GET /api/v2/data/challenge/29482
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lfU8NmGcNHlp9zYPU0tRUcDw641ZZYhmMeCrzz0H4iUZRUPLCLQGGUB7bieCIXvcTJxq1XjyZP8gOcs%2FkVf7XuyirN2y8WjWSpA4KUXp2Mvsvjk2XJWJVCFv83XvUZK%2BP28%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e763b9ab41f7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NDgyLCJuYW1lIjoiQ2hhbmdlIHN3aW1taW5nIHBvb2wgbm9kZXMgdG8gYXJlYXMgLSBOb3J0aCBDYXJvbGluYSIsImFjdGlvbnMiOnsidG90YWwiOjc4OSwiYXZhaWxhYmxlIjo3NTIsImZpeGVkIjozNywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNjgzMywidGFza3NXaXRoVGltZSI6Mzd9fV0=", "base64"));
  res.end();

  return __filename;
};
