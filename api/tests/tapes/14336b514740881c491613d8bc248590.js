var path = require("path");

/**
 * GET /api/v2/data/challenge/29303
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1VgHVT5WFLgXkz%2FrL5gz8fvMkrHQkyUzkJWecYJ8IGZ1No308XkHYgHfM8zJiPao41o%2FQ%2B%2FQ13SHIFUqNMtl%2FIOJaMMrj3k906Hgw478CLebXzwiRPCCNaiAEFJmzpD%2FhsI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e76d3d020da7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzAzLCJuYW1lIjoiU3VwZXJtYXJrZXRzIG1pc3NpbmcgdmlzaXRpbmcgYWRkcmVzcyBbQ29vcF0iLCJhY3Rpb25zIjp7InRvdGFsIjoxMzkxLCJhdmFpbGFibGUiOjEzNzcsImZpeGVkIjo2LCJmYWxzZVBvc2l0aXZlIjo4LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjExNDI4OSwidGFza3NXaXRoVGltZSI6MTR9fV0=", "base64"));
  res.end();

  return __filename;
};
