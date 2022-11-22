var path = require("path");

/**
 * GET /api/v2/data/challenge/30026
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
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ApYdCh1No5V%2Fci4pZRGabnMidxLiduz0HF42kIwzpBaCw4eSQSbr9z4ytOhjFvjKdk%2BM8wqxGpJeVnqy5S4EWpYf7FPZdBrnmY2M3U0kSxxtIFM3kmVWSHyQvY9BCJDU2NI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e707eee816a9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDI2LCJuYW1lIjoiQlJBIC0gSW52YWxpZEdlb21ldHJ5Q2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoxNjQ0LCJhdmFpbGFibGUiOjE2MzksImZpeGVkIjo0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI5MDAwMiwidGFza3NXaXRoVGltZSI6NX19XQ==", "base64"));
  res.end();

  return __filename;
};
