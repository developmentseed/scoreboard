var path = require("path");

/**
 * GET /api/v2/data/challenge/28996
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fw4zTlj1b8FUeQ66q3uGv68nfD1DORglrHSPut8Y5V3xCJm4z0nZscR8VUiOe%2BJn9IY2PX6wBAeBtlQLWA8kQYpxqc7m8kVw1wbOhyzo%2BlmkDmUJWm76CkpEl4TIDBfKIlI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c2093e5fb9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTk2LCJuYW1lIjoiSGlzdG9yaWNhbCBmb3J0aWZpY2F0aW9ucyBvZiBJbmRpYSIsImFjdGlvbnMiOnsidG90YWwiOjEwNTMsImF2YWlsYWJsZSI6MTAzNywiZml4ZWQiOjgsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjUsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTk1Mzg0LCJ0YXNrc1dpdGhUaW1lIjoxNn19XQ==", "base64"));
  res.end();

  return __filename;
};
