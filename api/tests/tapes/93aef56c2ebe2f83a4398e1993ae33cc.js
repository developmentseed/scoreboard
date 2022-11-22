var path = require("path");

/**
 * GET /api/v2/data/challenge/29646
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lC2mnRTKq1TFQ6Rdk9D4Y0rtj06sqUSpCAFmohS8a7p5ee5KYN4QrmjfW3S3Il0GOT0w5ZsYHIlEFLgYFUrjK3pC%2F3xXo7%2Fwjwuvf6p3eoyjeUvURJfY9ETAGdwUKT6YgwA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73b8b2f739b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQ2LCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBXcm9uZyByZXN0cmljdGlvbiBhbmdsZSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjoxMSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6Mywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo3LCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMjA5MzAsInRhc2tzV2l0aFRpbWUiOjExfX1d", "base64"));
  res.end();

  return __filename;
};
