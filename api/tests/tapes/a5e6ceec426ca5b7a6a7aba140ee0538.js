var path = require("path");

/**
 * GET /api/v2/data/challenge/29641
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
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qJC6KkO6zqkrPuZ%2FclCVN1wWo5wJ08tijY2frblB9dwBkO1QYIsmXgwT2v6H1MlYmz3qZrEuZVOfZ7QyeRoTa48uIAr2dqepM%2BtIeSt5cyfBP8QtrDncT6xobTOisJRyzT8%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73e1c700783-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQxLCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBIaWdod2F5IGhpZ2h3YXkgLSBLZWVwUmlnaHQhICIsImFjdGlvbnMiOnsidG90YWwiOjQsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDU5NTUyLCJ0YXNrc1dpdGhUaW1lIjo0fX1d", "base64"));
  res.end();

  return __filename;
};
