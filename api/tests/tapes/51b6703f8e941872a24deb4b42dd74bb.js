var path = require("path");

/**
 * GET /api/v2/data/challenge/29614
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
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N7ZFABmI4e7bKElMcuDi4%2FTdfQdjwSXJdSPDHtLmz%2BGCPnt0EwxjnjHcYMBj5%2BgJu85C5BFtG6iBMVLve4Q9U40I3w7XTWCPtf0AAOVKaZvKhvrtDJ1J%2B4YhcK6OYXZca4M%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e74a1bc6739b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjE0LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBNaXNzaW5nIHRvIHdheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjoxNSwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NywiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo2LCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxODkxNzksInRhc2tzV2l0aFRpbWUiOjE1fX1d", "base64"));
  res.end();

  return __filename;
};
