var path = require("path");

/**
 * GET /api/v2/data/challenge/29619
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5f5FJ4jKjaOdYucuLPptbIzRblZMz4QrHl%2B3x1iEc89HKLta6edr1G9Hslv%2BtGDVu%2FobMiNyuWzVLVRIDnzYBVZuhmk%2BaJO7iRsJH6tRc040rDjO%2F2rs61m7FB36DUzvRDk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e747b8cd0d95-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjE5LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBXcm9uZyByZXN0cmljdGlvbiBhbmdsZSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo3LCJhdmFpbGFibGUiOjAsImZpeGVkIjoyLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE0ODkxMiwidGFza3NXaXRoVGltZSI6N319XQ==", "base64"));
  res.end();

  return __filename;
};
