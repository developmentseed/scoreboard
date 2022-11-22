var path = require("path");

/**
 * GET /api/v2/data/challenge/29299
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=2.7999998565065e-05");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4KcbVYOW9jfRqxJ8lvKy7fwa6MI3epz1bT1sX%2FUWXZ8z3jvX%2FapPQ%2BG48n8BLSjY5rXQ%2Bj7y2LZgE2QvdEulsEeM2b%2FmBRXkihf0ThWUiwZF9JBaZKAYYOE58vK2hlKONE4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e76e4f940db9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5Mjk5LCJuYW1lIjoiSW5kb25lc2lhIC0gQ3Jvc3NpbmcgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjozOCwiYXZhaWxhYmxlIjozOCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MCwidGFza3NXaXRoVGltZSI6MH19XQ==", "base64"));
  res.end();

  return __filename;
};
