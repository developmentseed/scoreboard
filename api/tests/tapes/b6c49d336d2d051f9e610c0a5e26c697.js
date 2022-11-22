var path = require("path");

/**
 * GET /api/v2/data/challenge/30029
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fYDExwWomHysv2LNKRNnu9b8f2FXGPiTc606uDOgIFV3Rb7ETdhDSYucmtM1K3dVmiGXGdhxyP6E2cBT%2BBtLFg6E14s3jH3pJBvl7OJ7RJcp0csNcjdEkkMgy8SNWX4hYwY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e707cca541dc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDI5LCJuYW1lIjoiUEhMIC0gSW52YWxpZEdlb21ldHJ5Q2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoyOCwiYXZhaWxhYmxlIjoyMCwiZml4ZWQiOjMsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTYwMzAxLCJ0YXNrc1dpdGhUaW1lIjo4fX1d", "base64"));
  res.end();

  return __filename;
};
