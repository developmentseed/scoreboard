var path = require("path");

/**
 * GET /api/v2/data/challenge/29729
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H4Uyc%2FQWO8%2B%2FXYWGulGCIxeQZr0ph4p5te9QrY3AGXFqjpLmVBVfr8fyWJhT3w9UI%2FlWeGY9BBdp3luXfaGi7o2r1BwzlCHpNQNsGVZWCZrQGCNZbxHr7DZGvDIkmaE3jTQ%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e727fa9f11a5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzI5LCJuYW1lIjoiQWRkIEJ1aWxkaW5ncyB0byBXaW5kZXJtZXJlIGluIEVkbW9udG9uIEFsYmVydGEsIENhbmFkYSIsImFjdGlvbnMiOnsidG90YWwiOjE3NCwiYXZhaWxhYmxlIjoxNzEsImZpeGVkIjoyLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjM0NzIzMCwidGFza3NXaXRoVGltZSI6M319XQ==", "base64"));
  res.end();

  return __filename;
};
