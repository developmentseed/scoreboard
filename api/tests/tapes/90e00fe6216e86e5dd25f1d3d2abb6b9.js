var path = require("path");

/**
 * GET /api/v2/data/challenge/29667
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VN%2FNo%2FV86lRXR9zDbB1H%2BM6ScTqvhkfvyVvLK1%2FPsBsqvw6iKbFTymasNqbbXo7CycsDg0iFOzxKnRO7sWTMXeCKrJNYdqcUDm1XVJx65U50DDQTNEebBW7Yp2NlXdm99mI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e731eb8d0c51-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjY3LCJuYW1lIjoiQXVzdHJhbGlhIC0gV2VzdGVybiBBVSAtIEZsb2F0aW5nIGlzbGFuZCAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjozNiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6NiwiZmFsc2VQb3NpdGl2ZSI6MTAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MiwidG9vSGFyZCI6MTgsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEyOTE2MywidGFza3NXaXRoVGltZSI6MzZ9fV0=", "base64"));
  res.end();

  return __filename;
};
