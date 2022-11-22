var path = require("path");

/**
 * GET /api/v2/data/challenge/29608
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mogi%2FmKb7ewWhXKBECgCYquV37p1yO8rV7S3TqIFy17pnbUmilb%2FbEtn4O%2FeVcC1pq%2FV%2F6Ubfye70FvUpSUJoLhiMM8%2Bmd3gRovgYgNFb5JWiQlXcO9VSyoqgLQdfiZBx0I%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e74c89ba0dc2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjA4LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBGbG9hdGluZyBpc2xhbmQgLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjI5LCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjUsInRvb0hhcmQiOjMwLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNDIyMTYsInRhc2tzV2l0aFRpbWUiOjY3fX1d", "base64"));
  res.end();

  return __filename;
};
