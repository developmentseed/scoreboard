var path = require("path");

/**
 * GET /api/v2/data/challenge/29650
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gUx4XiWtl%2F9A9G1XRD8WWIFXHFKdBWMySImSqqbb919tYiWPh1Ik3uhGkmqH5F3Hrzjur87X1gfwtQ1NCKSZoOtE7%2BQ4Wk%2Ft2fsVnKshEfGizVLRmF%2FT14F2VVR7K6q%2F3Uc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7394e5c11c1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjUwLCJuYW1lIjoiQXVzdHJhbGlhIC0gVGFzbWFuaWEgLSBXcm9uZyByZXN0cmljdGlvbiBhbmdsZSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjoxMywiYXZhaWxhYmxlIjowLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6OCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3MzQwMSwidGFza3NXaXRoVGltZSI6MTN9fV0=", "base64"));
  res.end();

  return __filename;
};
