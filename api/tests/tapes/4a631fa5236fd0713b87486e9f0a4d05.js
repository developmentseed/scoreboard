var path = require("path");

/**
 * GET /api/v2/data/challenge/29506
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kZJcq7lZ4u9SUWojbp3qnBgiXKer4dHVHm0MmUOcRjIs%2F6rkbMdglTh0qL9m4FtjoYkMvaWkxPcgL1O5ynw%2FrFLfjgMmYYlq3EjHnxEAltxf2mcqRovPJwUT84zemgkiI78%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e75f2e430db9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTA2LCJuYW1lIjoiQ29tZXLDp29zIENhdGFsdW55YSBhbWIgd2Vic2l0ZSBubyBvcGVyYXRpdSIsImFjdGlvbnMiOnsidG90YWwiOjM2MSwiYXZhaWxhYmxlIjoyNTQsImZpeGVkIjozOCwiZmFsc2VQb3NpdGl2ZSI6NjgsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTQ3MTc5LCJ0YXNrc1dpdGhUaW1lIjo4MH19XQ==", "base64"));
  res.end();

  return __filename;
};
