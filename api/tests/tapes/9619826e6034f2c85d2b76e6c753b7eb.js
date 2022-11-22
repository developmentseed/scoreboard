var path = require("path");

/**
 * GET /api/v2/data/challenge/28830
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=9.0000012278324e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2NfT62T8UVcl9xCQO8BVnmkAqhkenDM2yE44mm3hFAslwizqhxL5VEaYB3VKLmsYx%2FOC35yjBkn6yZzlpkrFgpmnasXkNXKLwDsLRGmhYZxtOwD3K25fSPy5MGg31eVkO%2BY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e820e9d70779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODMwLCJuYW1lIjoiTmlnZXJpYSAtIENyb3NzaW5nIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzYyLCJhdmFpbGFibGUiOjM2MiwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MCwidGFza3NXaXRoVGltZSI6MH19XQ==", "base64"));
  res.end();

  return __filename;
};
