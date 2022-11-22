var path = require("path");

/**
 * GET /api/v2/data/challenge/30133
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n13UYy7dpPBQl80aJVTSKDM%2BWxNOVh8olI7LRUaeaIt3KgwZBHZgC4toO186i%2BJn3cMiGj3Ax69U1PLg3jc4kUkL2cckLccLnv0fV%2FzFMoim%2BTTcq1P2BH3gvmIn3EDOZxs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e6fd799e5fdc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMTMzLCJuYW1lIjoiU2Vtw6Fmb3JvcyBlbiB2w61hcyByZXNpZGVuY2lhbGVzIHkgdGVyY2lhcmlhcyIsImFjdGlvbnMiOnsidG90YWwiOjUzOCwiYXZhaWxhYmxlIjo1MjQsImZpeGVkIjoxNCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNDA2OTksInRhc2tzV2l0aFRpbWUiOjE0fX1d", "base64"));
  res.end();

  return __filename;
};
