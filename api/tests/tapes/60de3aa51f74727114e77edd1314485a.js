var path = require("path");

/**
 * GET /api/v2/data/challenge/29793
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=9.9999997473788e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ds0rRpLdkth%2Fv8vM3xCZUnLhD8nJEMVMEqHZRa3qCROkdbj4uYwoeOVljLTwwn1Zl1Vu0aTo1mFQpyI%2BXMtrYBp6ODXnMOAAZf%2FbsmQJWtKRpZG2DfKJq1zzyr6zGAFaBA8%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71b9dc411a2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzkzLCJuYW1lIjoiUWF0YXIgfCBNaXNzaW5nIFJvYWRzIHwgQWwtUmF5eWFuIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjQ5LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMDMsImZhbHNlUG9zaXRpdmUiOjE0LCJza2lwcGVkIjoxMCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0MiwidG9vSGFyZCI6ODAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjUyOTE1OCwidGFza3NXaXRoVGltZSI6MjQ5fX1d", "base64"));
  res.end();

  return __filename;
};
