var path = require("path");

/**
 * GET /api/v2/data/challenge/29192
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K9hiMsYwZ%2Bpv4cWfXu0LWGuhufxpSFm17BmZw5yqLCydOI7BwlPmksWI9NGkj0MLBxztuQs8JgBqviILgwAgnubdSLjmePVmv6w7U%2Bcugw%2FYStwqTPM71GrMQqk%2Bp0wdx%2Fs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7830f620d9f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MTkyLCJuYW1lIjoiTmlnZXIgRGlzY29ubmVjdGVkIFNldHRsZW1lbnRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6ODA1OSwiYXZhaWxhYmxlIjo4MDU2LCJmaXhlZCI6MiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo1NzIxMjQsInRhc2tzV2l0aFRpbWUiOjN9fV0=", "base64"));
  res.end();

  return __filename;
};
