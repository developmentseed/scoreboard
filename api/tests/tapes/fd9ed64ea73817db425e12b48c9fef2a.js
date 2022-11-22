var path = require("path");

/**
 * GET /api/v2/data/challenge/29479
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aUYRySIq1Ia7g4znRp9iBc%2BMJ9H9%2Bmhw8mpl9lvjMfE7bG4aVWAtsrn7jbksF8WMho5UUOVSa2AceNrQCuSH%2BjMiA%2BdDaAPtyqfFQ%2FjTNMjtiUxXYgRGhnn2kMDbzSGSqu0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7641d5e1006-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NDc5LCJuYW1lIjoiQ2hhbmdlIHN3aW1taW5nIHBvb2wgbm9kZXMgdG8gYXJlYXMgLSBHZW9yZ2lhIC8gVGVubmVzc2VlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDM0LCJhdmFpbGFibGUiOjM5MCwiZml4ZWQiOjQxLCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjYyNzIyOSwidGFza3NXaXRoVGltZSI6NDR9fV0=", "base64"));
  res.end();

  return __filename;
};
