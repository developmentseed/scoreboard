var path = require("path");

/**
 * GET /api/v2/data/challenge/29625
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2a1La5khOLiaE8wv6f05qLrYO3LUHsIib%2BUDfe5pD1FBBmNFAJ1we0a6rjRN5RT7xZ88%2BYjDxqFHNuwVskm0wWw5BhQLK1XZ9PS8RmUSNO3Wiz5YyyH%2FJ5qyxOXHGO1jFp8%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7455f4b1006-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjI1LCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXIC0gRGVhZCBlbmQgb25lIHdheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo4NywiYXZhaWxhYmxlIjowLCJmaXhlZCI6OCwiZmFsc2VQb3NpdGl2ZSI6NjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MTksImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIxNDk0NiwidGFza3NXaXRoVGltZSI6ODd9fV0=", "base64"));
  res.end();

  return __filename;
};
