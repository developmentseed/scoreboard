var path = require("path");

/**
 * GET /api/v2/data/challenge/29643
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
  res.setHeader("server-timing", "cf-q-config;dur=5.9999983932357e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zPlv51N7K88peSpD6NIPF%2FX51a5kLr%2Fx4D8%2Brn5gcy6EJ63DEWx8k17PLV4iIeR0vC%2FRZ3BZc7PdCLIpcz66Y0RlUerVs%2FLbQwBZgR6BQ1%2FQh3g68%2By74JnMe1yHkT4IDe0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73d4c2341c5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQzLCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBNaXNzaW5nIGZyb20gd2F5IC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjgsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6OCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjUxOTEzLCJ0YXNrc1dpdGhUaW1lIjo4fX1d", "base64"));
  res.end();

  return __filename;
};
