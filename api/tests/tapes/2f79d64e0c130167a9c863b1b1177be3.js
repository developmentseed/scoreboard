var path = require("path");

/**
 * GET /api/v2/data/challenge/29668
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cN%2Bde04gRdairlajuQqa2Wnxl%2FvKSUEu6kduVQ2i0YxfIWedBkl7TgpHH3usFP%2BoMhXtdIl8C8TtuXcdOVRcDMP6VrNuZapjyvtlS3PIMttAw0kNSsc5h28krMGgihQRVgg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72f9bce0da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjY4LCJuYW1lIjoiQXVzdHJhbGlhIC0gV2VzdGVybiBBVSAtIEhpZ2h3YXkgaGlnaHdheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo4MywiYXZhaWxhYmxlIjowLCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MjUsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NDQsInRvb0hhcmQiOjEzLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3MzA0MywidGFza3NXaXRoVGltZSI6ODN9fV0=", "base64"));
  res.end();

  return __filename;
};
