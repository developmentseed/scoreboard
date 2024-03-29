var path = require("path");

/**
 * GET /api/v2/data/challenge/29616
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZHBGJpFFzgi5oFMnzoMeYCo%2Bbajm7miOxaz6ZE4SX14kffTr1vXyLB%2FQKztNj6AG0yEG3m9XoHy%2BtMNGoNT%2FMaQHyHjkqlZfb5D9yHLNxpWunAEyHg86R14PxDbl8JYuUQE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e749cef80779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjE2LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBWaWEgaXMgbm90IG9uIHRoZSB3YXkgZW5kcyAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjoyLCJhdmFpbGFibGUiOjAsImZpeGVkIjoyLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE5MDQ2OSwidGFza3NXaXRoVGltZSI6Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
