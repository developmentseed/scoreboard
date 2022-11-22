var path = require("path");

/**
 * GET /api/v2/data/challenge/29818
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=3.9999995351536e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d7oDA%2Fr1Y5t8HJPRIdLq5UnRozSFbqT%2Fx3%2FZ56caPj8ASTuQsEfPLU3OvK0cl9YafT3FDMOQi1dt9lNC2UOSXmutRveQZtcyENUF5K5krMiaz1zHX8DXR2hW3Hl6FtIiou8%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e713e83e41d0-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODE4LCJuYW1lIjoiaHlkcmFudHkgeiBcIm5hendhbWlcIiB3IFBvbHNjZSIsImFjdGlvbnMiOnsidG90YWwiOjgwNzUsImF2YWlsYWJsZSI6ODA2NiwiZml4ZWQiOjYsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzAyNDksInRhc2tzV2l0aFRpbWUiOjl9fV0=", "base64"));
  res.end();

  return __filename;
};
