var path = require("path");

/**
 * GET /api/v2/data/challenge/29343
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p78LZ4Xrdrw0hdAycrOc9EPNUG7YR3FiJbMB69btMWpsiOZiFKkTRFYg18weWEb9DIHU%2Fzr1zb3xb6dOqKdsDdt0EDAJX%2B4gr%2Fz4uItDuZlb2z4ESOBH7sZ5vDXLkN755Ok%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e768c8fc739b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzQzLCJuYW1lIjoiUmVzdHJpw6fDtWVzIGRlIGNvbnZlcnPDo28gcHJvYmxlbcOhdGljYXMgbm8gQnJhc2lsIC0gTWluYXMgR2VyYWlzIC8gQnJhemlsIHByb2JsZW1hdGljIHR1cm4gcmVzdHJpY3Rpb24iLCJhY3Rpb25zIjp7InRvdGFsIjoxMTksImF2YWlsYWJsZSI6MCwiZml4ZWQiOjY2LCJmYWxzZVBvc2l0aXZlIjo1MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0OTUxNTYsInRhc2tzV2l0aFRpbWUiOjExOX19XQ==", "base64"));
  res.end();

  return __filename;
};
