var path = require("path");

/**
 * GET /api/v2/data/challenge/29338
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sS4ruKNCMFvdv2Odfohl1IvAGBB%2BzkLqEk%2FpLrXe9SgkiuoXh0gvP1QcyvUeK5Kh5akjKgIdp9ZHOBmuHjQOGyKtGQGmj5bP9aamKmGDTd8Kbi3w42VQkUJ4cu3CTK2qxf4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e769cff30cf5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzM4LCJuYW1lIjoiUmVzdHJpw6fDtWVzIGRlIGNvbnZlcnPDo28gcHJvYmxlbcOhdGljYXMgbm8gQnJhc2lsIChFc3Bpcml0byBTYW50bykgLyBCcmF6aWwgcHJvYmxlbWF0aWMgdHVybiByZXN0cmljdGlvbiIsImFjdGlvbnMiOnsidG90YWwiOjI1LCJhdmFpbGFibGUiOjAsImZpeGVkIjo4LCJmYWxzZVBvc2l0aXZlIjoxNywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0Nzc4NDksInRhc2tzV2l0aFRpbWUiOjI1fX1d", "base64"));
  res.end();

  return __filename;
};
