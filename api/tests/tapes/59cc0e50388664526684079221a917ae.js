var path = require("path");

/**
 * GET /api/v2/data/challenge/29495
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=toLEdggUrTIK1VzYBnxYsA9JjsbVlpguzlqF5xo%2FCFuX%2BXXhh38UqvYcqFNT4g8snHDwclNtG6YBkyCzBBToeuFFQlRQtC2VcnCKXKT4WXiOPgV%2BfoZQ3Qi5SdbnnSWM5GY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e761d9775fc5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NDk1LCJuYW1lIjoiQ2hhbmdlIHN3aW1taW5nIHBvb2wgbm9kZXMgdG8gYXJlYXMgLSBFYXN0ZXJuIFVuaXRlZCBTdGF0ZXMiLCJhY3Rpb25zIjp7InRvdGFsIjoxMjU0LCJhdmFpbGFibGUiOjEyMzgsImZpeGVkIjo1LCJmYWxzZVBvc2l0aXZlIjoxMSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyOTc1OSwidGFza3NXaXRoVGltZSI6MTZ9fV0=", "base64"));
  res.end();

  return __filename;
};
