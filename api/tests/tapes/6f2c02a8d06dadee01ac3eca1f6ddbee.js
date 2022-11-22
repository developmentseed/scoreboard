var path = require("path");

/**
 * GET /api/v2/data/challenge/28935
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y7ceFUfrG84Zk8GcYVK%2B3%2BH1xfLU8M1%2BozHlf4aNep%2FdZ5cjMPYKvSlxBiPT0F8lLmRHAQSV1lNusW7r3mFRf%2BxCEiUA%2BXdvQUiOgW2YmCa5FhLVSystN%2B6A%2FguLSSA9mpw%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7d8aff811a2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTM1LCJuYW1lIjoiTWV4aWNvIC0gRmxvYXRpbmcgV2F5cyAmIERpc2Nvbm5lY3RlZCBSb2FkcyAvIENhcnJldGVyYXMgZmxvdGFudGVzIHkgZGVzY29uZWN0YWRhcyIsImFjdGlvbnMiOnsidG90YWwiOjMwLCJhdmFpbGFibGUiOjMwLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
