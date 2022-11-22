var path = require("path");

/**
 * GET /api/v2/data/challenge/28853
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000000366454e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=15a5cEA%2FwgYZVkJCxsucw07MASx5gdcJX0s1exnyp1Us5WfmXa9b5t%2Bej2oaTYfI%2BvETyxyZa4xjvGWwBcWmWkcidZKsJxF99azc2B%2FWFXk1JBlEtIAbaRHG0lGO3O1P5C0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e810a82a0cfc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODUzLCJuYW1lIjoiU3lyaWEgLSBPdmVybGFwcGluZyBXYXlzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MiwiYXZhaWxhYmxlIjoyLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
