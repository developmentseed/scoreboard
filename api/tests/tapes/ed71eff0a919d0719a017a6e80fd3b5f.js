var path = require("path");

/**
 * GET /api/v2/data/challenge/29006
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ffbp0QfduFHRmhfmmrT%2FUsO5firCJPedtK1sjqo02FkSAMdOqa2c8spAf1M5%2B%2FSUnWxW%2FAAn1p7RO8gnnkn3uX6gV9SHoPnTjnmV9vTN3fL3C%2Bl5pufSpvvI%2FxcpRJEK%2FCU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c1ec50076e-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDA2LCJuYW1lIjoiQXVzdHJhbGlhIC0gTWFsZm9ybWVkUm91bmRhYm91dENoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTQ2LCJhdmFpbGFibGUiOjAsImZpeGVkIjo4MywiZmFsc2VQb3NpdGl2ZSI6MTAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTYsInRvb0hhcmQiOjM3LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMjA1MTEsInRhc2tzV2l0aFRpbWUiOjE0Nn19XQ==", "base64"));
  res.end();

  return __filename;
};
