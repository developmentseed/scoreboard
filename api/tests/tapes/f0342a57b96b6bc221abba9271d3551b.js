var path = require("path");

/**
 * GET /api/v2/data/challenge/29662
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=62IuL5fgOUooPX5VHzaGWg9tN96n5B8j%2BnRM6YB0cineOlRp8PMNQQiuGbpjRwu6ChPBITEOohXjpLvMfnSdsybWedAYadFWJcBhBvnhHae%2BXR8eSfz3nN%2BsEQlp0e5pzwo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e734686b73a3-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjYyLCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBXcm9uZyBkaXJlY3Rpb24gLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMzQwNDgsInRhc2tzV2l0aFRpbWUiOjF9fV0=", "base64"));
  res.end();

  return __filename;
};
