var path = require("path");

/**
 * GET /api/v2/data/challenge/29795
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YEr%2Ft0GT7%2FzNGsV2mgvCdSdnCwQmOPsTu%2FU2MGlnkl0Fiu7WlhOvLuoi8n%2B8svgqlqEtXYLP4kYlo04bcCJ%2BwiWwLg2ecn4CVAE%2BzhnHYSMbclyKbJjCzc0elruJ42NUUXM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71bbc6f16dd-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5Nzk1LCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBDRVAgcGFyYSBvIEZvcm1hdG8gdXNhZG8gbm8gQnJhc2lsIC0gRXN0YWRvIGRlIFBlcm5hbWJ1Y28uICAvICBDb3JyZWN0aW9uIG9mIFpJUCBDb2RlIGZvciB0aGUgRm9ybWF0IHVzZWQgaW4gQnJhemlsIC0gU3RhdGUgb2YgUGVybmFtYnVjby4iLCJhY3Rpb25zIjp7InRvdGFsIjoyNDQsImF2YWlsYWJsZSI6MjQ0LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
