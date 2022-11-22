var path = require("path");

/**
 * GET /api/v2/data/challenge/28812
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GQCGcKKyEfGNYN3ZzDehL3EV9WM1%2FQvGzKCNQAK7KyAn%2FOQCEsHu0uZh%2BhgOh9W1MwhIUQRfqxvAJ2C7cyi9yui5h%2B94AeeqtU02vusGWJU0ko9KN7Fy7tBMgUw%2FbBCdHRc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e82f0ae55f9b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODEyLCJuYW1lIjoiVGFuemFuaWEgLSBGbG9hdGluZyBXYXlzIC8gRGlzY29ubmVjdGVkIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDU4LCJhdmFpbGFibGUiOjQzMywiZml4ZWQiOjIyLCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQ4MzM1NSwidGFza3NXaXRoVGltZSI6MjV9fV0=", "base64"));
  res.end();

  return __filename;
};
