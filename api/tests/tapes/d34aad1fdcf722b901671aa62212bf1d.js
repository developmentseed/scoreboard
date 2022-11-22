var path = require("path");

/**
 * GET /api/v2/data/challenge/29531
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9opNVWlmLylhSWCrO8omgyHMcaRHXLSZHV9ZAKbiZ%2Bw2m%2F7xkiqm7qNCU0PAUerP%2Bhq0dG39Lq36npG0X%2BCKlgKZEbBqVdne9h9OjnHs%2F9ipALwA5Pacc365n6PPy9BW2N8%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7575cbc41be-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTMxLCJuYW1lIjoiTmV3IFplYWxhbmQgLSBJbnZhbGlkVHVyblJlc3RyaWN0aW9uQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjo3NCwiYXZhaWxhYmxlIjo2OSwiZml4ZWQiOjUsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjA2OTI1NiwidGFza3NXaXRoVGltZSI6NX19XQ==", "base64"));
  res.end();

  return __filename;
};
