var path = require("path");

/**
 * GET /api/v2/data/challenge/29047
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a2HxORLUvu2DYd4PKcYNR543Fl6xx5iByODhgTZjw9Lk07lezu17axxAuNUw1wDxb027%2Bx98TA0NKUm8nGI02cA3TdoxVA4vto0pe%2B16KEVbypUTRaSPj6mXnyypwnDVwXs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7aeab3741c5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDQ3LCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBuYSBDaWRhZGUgZGUgU2FsdmFkb3IgKEJBKSAtIEJyYXNpbCAvIEluY2x1c2lvbiBvZiBTdHJlZXQgTmFtZXMgaW4gdGhlIENpdHkgb2YgQ2lkYWRlIGRlIFNhbHZhZG9yIChCQSkgLSAgQnJhemlsIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTAwMCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6OTgsImZhbHNlUG9zaXRpdmUiOjkwMiwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMjQ0MjQsInRhc2tzV2l0aFRpbWUiOjEwMDB9fV0=", "base64"));
  res.end();

  return __filename;
};
