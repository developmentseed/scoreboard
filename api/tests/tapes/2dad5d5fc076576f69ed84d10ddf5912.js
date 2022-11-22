var path = require("path");

/**
 * GET /api/v2/data/challenge/29642
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GlfsxjELJO31uCbWNUIznkqePARX4A4pVL2iP8ZnFUlrBVu7AL%2B5WDwtrR5NePo0SDC3AaTNM8n5f3bfOVf81e706srr3yb0DUwuZRUmvrZjTWlfNKrJU3lp%2B0nJjiadc5s%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73e0e8c076e-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQyLCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBIaWdod2F5IHdhdGVyd2F5IC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjEyNDAsImF2YWlsYWJsZSI6OTE0LCJmaXhlZCI6MzIsImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MzksInRvb0hhcmQiOjI1MywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTQ3NDU1LCJ0YXNrc1dpdGhUaW1lIjozMjZ9fV0=", "base64"));
  res.end();

  return __filename;
};
