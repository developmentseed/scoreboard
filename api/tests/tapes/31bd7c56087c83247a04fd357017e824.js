var path = require("path");

/**
 * GET /api/v2/data/challenge/29049
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wOq1TxvCTV47eWBSnd1it7TfiVWtzQwM9tuTl%2BVS9TnXpbmxQa8LmjK8%2FXsscp0wm5DncGbj5%2FrNph3oPIOE9qdykm%2FFzCOIDVfkZZf%2BvtDRG53Ft4nAtnh%2F%2Fzjrl%2BgnI4I%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7abaaef11a2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDQ5LCJuYW1lIjoiTWFyeWxhbmQgTm8gUmlnaHQgVHVybiBSZXN0cmljdGlvbnMiLCJhY3Rpb25zIjp7InRvdGFsIjo2NzQsImF2YWlsYWJsZSI6NTc4LCJmaXhlZCI6MTEsImZhbHNlUG9zaXRpdmUiOjQ5LCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjMzLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozNDg2MTIsInRhc2tzV2l0aFRpbWUiOjk2fX1d", "base64"));
  res.end();

  return __filename;
};
