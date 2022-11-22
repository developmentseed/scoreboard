var path = require("path");

/**
 * GET /api/v2/data/challenge/29803
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ghk%2FPiNgZCgpNDiWKnmhSiTpBoJb3F4e5M79r%2B%2B3vtBSEMwaI5JBVLFyJI%2BgxTq%2BCJ15GS7Zf0RgQjt0qYrVXx9kA6U%2FLzpXWcM2JGW5FxGeCohR5jJyVt8n9gPxXqIvEx4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7191b8a0dbb-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODAzLCJuYW1lIjoiSXMgdGhpcyBzdXJmYWNlIHBhcmtpbmc/IFNlYXR0bGUiLCJhY3Rpb25zIjp7InRvdGFsIjo5OTEsImF2YWlsYWJsZSI6NTQ4LCJmaXhlZCI6Mzk3LCJmYWxzZVBvc2l0aXZlIjoyOSwic2tpcHBlZCI6NywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo2LCJ0b29IYXJkIjo0LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0ODM1MiwidGFza3NXaXRoVGltZSI6NDQzfX1d", "base64"));
  res.end();

  return __filename;
};
