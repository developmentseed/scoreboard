var path = require("path");

/**
 * GET /api/v2/data/challenge/29655
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
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hJs%2Bv3bbqt627m22DCp9TB6D%2FMIRCnsZwSBIL9F0ku6eJ9hYevbYBrcqW5c%2F9nkZryThGK4LBwX%2FnqJSn7ybPoAgBHVVRN3AJEukJfFaZ0bR9NutnIEl%2Bw1eq5DHjO2fsUE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e736ed4b5fa1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjU1LCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBIaWdod2F5IGhpZ2h3YXkgLSBLZWVwUmlnaHQhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NjksImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjExLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQzLCJ0b29IYXJkIjoxNSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTA0MTQzLCJ0YXNrc1dpdGhUaW1lIjo2OX19XQ==", "base64"));
  res.end();

  return __filename;
};
