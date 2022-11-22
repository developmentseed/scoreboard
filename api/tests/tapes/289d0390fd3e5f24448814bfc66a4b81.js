var path = require("path");

/**
 * GET /api/v2/data/challenge/29670
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U%2BKXP7u4kA0Ra%2FDfIOnSKdgxRrvGTtxg3TZevYFeor1K9f8xNY6jo6paruyWCdOG5z7hE5RDsDdMSRqnMtXGgY5%2F5XdW6ftwgg%2BPR2WXLSzLtpc%2BK7DGelnqiwqWwrwsIQk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72f88380c3f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjcwLCJuYW1lIjoiQXVzdHJhbGlhIC0gV2VzdGVybiBBVSAtIEltcG9zc2libGUgYW5nbGVzIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDYzMjQwLCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
