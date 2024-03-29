var path = require("path");

/**
 * GET /api/v2/data/challenge/29836
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
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Oh0VPvLS2bhXie02fpT%2FtcGAMhPdXFLCvjfeY8zVqpiYN3KpIuKDxDPkUjWxIamBxYaZyEGO41um7XbFLI4JH00Itqoq%2BXytsW7bz%2FB0ejzyK517sg0srip01XML3aI22gI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7115a2e0d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODM2LCJuYW1lIjoiVHJpbmstT3J0ZSBpbiBBdWdzYnVyZyIsImFjdGlvbnMiOnsidG90YWwiOjMwLCJhdmFpbGFibGUiOjI5LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMTcxNTQsInRhc2tzV2l0aFRpbWUiOjF9fV0=", "base64"));
  res.end();

  return __filename;
};
