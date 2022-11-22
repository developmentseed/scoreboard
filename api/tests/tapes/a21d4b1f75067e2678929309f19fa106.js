var path = require("path");

/**
 * GET /api/v2/data/challenge/28823
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gax3GvZbk%2FXNEEp2gJDKk7VZuSgCoFiYWS9ONLSLsC9LAygiX8GFFPAC0EpHcUk3hSbuOj1Qk%2BxwYOlRkbMrl4ozQlO24n0rzvHV8g3T5pRgI63VaYJgBcuIy9pyrlL6ows%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e8244c2e0db5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODIzLCJuYW1lIjoiQnJhemlsIC0gQ29ubmVjdGl2aXR5IENoZWNrIC8gQ29uZWN0aXZpZGFkZSByb2RvdmnDoXJpYSIsImFjdGlvbnMiOnsidG90YWwiOjY5LCJhdmFpbGFibGUiOjAsImZpeGVkIjo1NSwiZmFsc2VQb3NpdGl2ZSI6MTIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzM4MjMzLCJ0YXNrc1dpdGhUaW1lIjo2OX19XQ==", "base64"));
  res.end();

  return __filename;
};
