var path = require("path");

/**
 * GET /api/v2/data/challenge/28959
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FQA8Exk4OPIpvibgG1vd%2FRZBr0uTalJ1XvzchSkwIYSK2UpikAizJUVv4a1fGvytWDTa4isOjBACHA6tKhu4ouGo7bk3%2FsnqrhBsXxStJa00MTh9HuJ%2BeE5iYlh5C2C9HKw%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7cba9df41f7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTU5LCJuYW1lIjoi0KPRgdGC0YPQv9C4INC00L7RgNC+0LPRgyDQsdC10LcgZGlyZWN0aW9uIHwg0KbQtdC90YLRgNCw0LvRjNC90YvQuSDRhNC10LTQtdGA0LDQu9GM0L3Ri9C5INC+0LrRgNGD0LMiLCJhY3Rpb25zIjp7InRvdGFsIjoyMjU3LCJhdmFpbGFibGUiOjIyNTcsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
