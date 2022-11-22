var path = require("path");

/**
 * GET /api/v2/data/challenge/29022
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZL%2FRdeKl7%2Fw10KV8WzHRNOIRgnICCit2LIdbE%2FWE8Zl3mJ1qLTd42s%2FNu034vcWHLeIBrBjbYH20%2FfkHKlEeflqbji94ZUkkKQeu%2FxzhwR8SZUdNHhWsNtxR50%2BeShsmEKg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b87cff0db5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDIyLCJuYW1lIjoiQXVzdHJhbGlhIC0gQ29ubmVjdGl2aXR5Q2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoxNDYsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjc2LCJmYWxzZVBvc2l0aXZlIjo0Miwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo4LCJ0b29IYXJkIjoyMCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjE5NTk2LCJ0YXNrc1dpdGhUaW1lIjoxNDZ9fV0=", "base64"));
  res.end();

  return __filename;
};
