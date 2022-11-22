var path = require("path");

/**
 * GET /api/v2/data/challenge/29791
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pjN5JI3yHUZmx0cFttuLhSmQ9A4i94DwrvolzrQz%2BJyM6u6rDmZzHRJhx72KG32qfUcz0CivDueKf2zPdDIgQvDvoGnWf5%2BhLRsXCvomZbNYrD7ptHhyc42pMMk9wMTLwx0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71e1d020783-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzkxLCJuYW1lIjoiUWF0YXIgfCBNaXNzaW5nIFJvYWRzIHwgQWwtQ2hhdXIiLCJhY3Rpb25zIjp7InRvdGFsIjoxOTcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEzMCwiZmFsc2VQb3NpdGl2ZSI6OSwic2tpcHBlZCI6NDIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NSwidG9vSGFyZCI6MTEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM1NjIwNywidGFza3NXaXRoVGltZSI6MTk3fX1d", "base64"));
  res.end();

  return __filename;
};
