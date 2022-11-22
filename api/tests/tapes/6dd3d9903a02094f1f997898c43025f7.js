var path = require("path");

/**
 * GET /api/v2/data/challenge/30113
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uGLgQFp7WjwCPWMiRLg4qhOaysbAkc47kkb8nOS2cJKvDbVVK%2Bjc%2FRm%2BJWVE2Z%2BH9qbVZ2uEquuAzjZv6JEtMfcyJSdKvHQSCmA55ulEUkFtfeNY84nKko0GTFA%2BHmG%2F1z0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7004f0912a0-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMTEzLCJuYW1lIjoiUEhMIC0gSW50ZXJzZWN0aW9uQXREaWZmZXJlbnRMYXllcnNDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6ODk4MzYsInRhc2tzV2l0aFRpbWUiOjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
