var path = require("path");

/**
 * GET /api/v2/data/challenge/29863
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p21x0VIhFOgVL4FzOvZlNnrQ0TT2bqgowpyZWDRgxuA0sPm62HYRdPfy4A2731w4oZmjKrPy%2BP9akRtvIxYZRHribA4Y1CjAVV7io8bOpL5G%2BLlIRl2oV6z2VxLXfrobFDA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7114c300db9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODYzLCJuYW1lIjoiTGFkZXN0YXRpb25lbiBmw7xyIEZhaHJyw6RkZXIgKGUtQmlrZXMpIGluIERldXRzY2hsYW5kIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NzQsImF2YWlsYWJsZSI6NzAsImZpeGVkIjo0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE4NTMwMiwidGFza3NXaXRoVGltZSI6NH19XQ==", "base64"));
  res.end();

  return __filename;
};
