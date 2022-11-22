var path = require("path");

/**
 * GET /api/v2/data/challenge/29797
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E2awpWBachYN7DzS7SJ%2BzqGe64t3R2wCIQ3fLhHyQVAw%2FjpANAM6DDkxlAcldSkEC09e2TtULCAws%2BWYZcBGtd1dTtpa9ko2%2FbojbhwZrQV65vYW7iQ%2ByhmSbvihYCh9Se4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7193cc27397-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5Nzk3LCJuYW1lIjoiQ29ycmXDp8OjbyBkZSBDRVAgcGFyYSBvIEZvcm1hdG8gdXNhZG8gbm8gQnJhc2lsIC0gRXN0YWRvIGRhIEJhaGlhLiAvIENvcnJlY3Rpb24gb2YgWklQIENvZGUgZm9yIHRoZSBGb3JtYXQgdXNlZCBpbiBCcmF6aWwgLSBTdGF0ZSBvZiBCYWhpYS4iLCJhY3Rpb25zIjp7InRvdGFsIjo5MzcsImF2YWlsYWJsZSI6OTM3LCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
