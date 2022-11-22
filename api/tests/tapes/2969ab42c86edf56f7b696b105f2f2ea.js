var path = require("path");

/**
 * GET /api/v2/data/challenge/29033
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YmA%2FmkHxj7uoLQ%2FUMVap9QWgULTCZ%2FCcwusylxQiJim7WxA9bvb%2FYZg%2FwtlFMD%2BxJbgXYzdINBeN8qEE1n1tw74ljlb6KkgGKa%2BGulids7Cp24283IE1p75VGTcfcF4VOFc%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b0ab940c3f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDMzLCJuYW1lIjoiQXVzdHJhbGlhIC0gSW52YWxpZFR1cm5MYW5lc1ZhbHVlQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjo0MiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MzQsImZhbHNlUG9zaXRpdmUiOjIsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6NiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTA1OTI4LCJ0YXNrc1dpdGhUaW1lIjo0Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
