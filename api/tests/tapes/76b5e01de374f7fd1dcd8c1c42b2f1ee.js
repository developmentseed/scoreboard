var path = require("path");

/**
 * GET /api/v2/data/challenge/29024
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aEUzXLN%2BWX11hoQKCnJCTl6EDYmGvNesN%2ByqMP3QIUvHsJ%2FNyGy5uHfgc%2F%2FvTmumyVLlrusrHbdyUz6FJopbR%2F%2Bdu6OTNx85P6hKtSL9tchLhE8XcWxxsuThWA%2BxJHZP0K4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b52c8841b8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDI0LCJuYW1lIjoiQXVzdHJhbGlhIC0gQ29uZmxpY3RpbmdUYWdDb21iaW5hdGlvbkNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTgsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEyLCJmYWxzZVBvc2l0aXZlIjo0LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI5ODM2OCwidGFza3NXaXRoVGltZSI6MTh9fV0=", "base64"));
  res.end();

  return __filename;
};
