var path = require("path");

/**
 * GET /api/v2/data/challenge/28945
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=1.0000001566368e-05");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7MkvYc4x7aWRUds8IcJrexwZ9O5qSr2edV1ZmF8SPQp%2FW3Gj0Uaw5%2B0lkHDanTOjMBJ5ZauKvZFRIhy3VV5i0kEtxP3thMTk7IeoEk0t%2FVlzaIuGYG3HmBHiaO%2B698fHoqc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7d1fcc816a9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTQ1LCJuYW1lIjoiTWFsYXlzaWEgLSBGbG9hdGluZyBXYXlzIC8gRGlzY29ubmVjdGVkIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjQsImF2YWlsYWJsZSI6MTcsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjIsInRvb0hhcmQiOjQsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMyMTkxNSwidGFza3NXaXRoVGltZSI6N319XQ==", "base64"));
  res.end();

  return __filename;
};
