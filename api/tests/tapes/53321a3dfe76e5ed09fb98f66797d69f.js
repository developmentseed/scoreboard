var path = require("path");

/**
 * GET /api/v2/data/challenge/29854
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PoEOiPKZfdC%2B3wo%2F9Oo6FuEeXPATzaetTDm%2FPVx1SkPmga8DCtymP7UVnVj3DJ7f9HnihReZHAObqyHcE0SMJuu0SHKtrsMVaJ%2FXwt96qNo3bwahkK44XEn4%2Bpcq7EaFXgk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7117bb573c7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODU0LCJuYW1lIjoiSG91c3RvbiwgVFg6IElzIHRoaXMgYSBzdXJmYWNlIHBhcmtpbmcgbG90PyAiLCJhY3Rpb25zIjp7InRvdGFsIjo4MjAsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjY5MywiZmFsc2VQb3NpdGl2ZSI6MzYsInNraXBwZWQiOjgxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjUsInRvb0hhcmQiOjUsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI4MzY2LCJ0YXNrc1dpdGhUaW1lIjo4MjB9fV0=", "base64"));
  res.end();

  return __filename;
};
