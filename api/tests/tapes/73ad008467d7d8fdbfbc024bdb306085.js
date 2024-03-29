var path = require("path");

/**
 * GET /api/v2/data/challenge/29763
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BzHt5wQk7cAgTTOjig%2ByOjy0Vc9oJMPi9tlaE%2BxgAOOc2qLR2C47dqy%2Fusmhtfsi85hsOB0avmXrUZMnY599MQCEY4WiZiFaYq0c8t%2F4KQyr69lyYsJwOzckGM%2BNIMSq94U%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7208e0f0da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzYzLCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyB0byBDYWxsYWdoYW4gaW4gRWRtb250b24sIEFsYmVydGEiLCJhY3Rpb25zIjp7InRvdGFsIjozNCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTQsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE0NzA3OSwidGFza3NXaXRoVGltZSI6MzR9fV0=", "base64"));
  res.end();

  return __filename;
};
