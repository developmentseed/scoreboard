var path = require("path");

/**
 * GET /api/v2/data/challenge/29665
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PybwDn4xZPJZNaqO8Mvk54Iuqd9z9hS6MQOHxuheuydO%2FwkbjsBQiFJGiJqY0Tx0GttHpO01p4kxCOE8skPWgHS2Xq8F%2Fo1JG3CgwusoygB9plt%2BDWQgddVZI66TCLDv6H4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e731fe100779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjY1LCJuYW1lIjoiQXVzdHJhbGlhIC0gV2VzdGVybiBBVSAtIEJyaWRnZS90dW5uZWwgdGFncyAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo1LCJhdmFpbGFibGUiOjAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjozLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQzODk3LCJ0YXNrc1dpdGhUaW1lIjo1fX1d", "base64"));
  res.end();

  return __filename;
};
