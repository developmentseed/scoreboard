var path = require("path");

/**
 * GET /api/v2/data/challenge/29925
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xGZexGDBO3bYSWYGbdrPzruH3fS8LIiZkM%2B3Xz%2FR7VBgj7gRjM0rETKM1LS3%2Ff8pCm6isrS%2FArCORENc3KfwwZ17TkcHT8LFS265NDEXUkcJkI76sKiSR1pvqzLupVzxHUQ%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e70f0d010da7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5OTI1LCJuYW1lIjoiR0JSIC0gU2hhcnBBbmdsZUNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzMsImF2YWlsYWJsZSI6MTgsImZpeGVkIjoxNCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNjEwNjQsInRhc2tzV2l0aFRpbWUiOjE1fX1d", "base64"));
  res.end();

  return __filename;
};
