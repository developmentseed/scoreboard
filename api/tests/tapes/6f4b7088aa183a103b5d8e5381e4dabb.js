var path = require("path");

/**
 * GET /api/v2/data/challenge/29012
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GjVsHWDJIkzE6dZUlC6Hu9JfEqXddeOtxrrUHxfKdJ%2FMlqFKz2vgWlXflECXeNulGDVmMBiRW7dhZqGJBIiGu10CmopJWYRuk2D6aYDF5kCoNAbe18FpPwLgzZLIdnut2uE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7be9b3e0779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDEyLCJuYW1lIjoiQXVzdHJhbGlhIC0gT3ZlcmxhcHBpbmdFZGdlQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjo0OTIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIyOSwiZmFsc2VQb3NpdGl2ZSI6MzYsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NjcsInRvb0hhcmQiOjE1OCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjAyNDE5LCJ0YXNrc1dpdGhUaW1lIjo0OTJ9fV0=", "base64"));
  res.end();

  return __filename;
};
