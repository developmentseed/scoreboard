var path = require("path");

/**
 * GET /api/v2/data/challenge/29660
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
  res.setHeader("server-timing", "cf-q-config;dur=3.9999995351536e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a4o4J4rAc2wtV%2F99m7iKnZMWiYoRTOqVM%2FJKtd%2BB7aN6llZvVnXOrP55r996Hy8Qr27%2FFsIOpHfqDS54do7%2BTw5b%2Feg%2F2Y1Bh9jHVvKnb7KgpAmWEi4MIE8gZLl2f%2Bf1dMw%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e734683f5fc5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjYwLCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBNaXhlZCBMYXllciBJbnRlcnNlY3Rpb24gLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjMzLCJmYWxzZVBvc2l0aXZlIjo0LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjE0LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMDgwNjUsInRhc2tzV2l0aFRpbWUiOjUxfX1d", "base64"));
  res.end();

  return __filename;
};
