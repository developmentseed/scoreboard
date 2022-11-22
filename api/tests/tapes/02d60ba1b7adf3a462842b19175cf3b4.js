var path = require("path");

/**
 * GET /api/v2/data/challenge/29659
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=5.9999983932357e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BpY1u0XEJnxsFA6MtKgK2vrKFTyD84rZJyWEE8iM4HbLGJNA8ZIYDzMsApncuAoT7y8fOXPyXVt2LXE8yQLlYzB%2Bo5f9hZoYt08qY7Elv2TfG%2Bdq5LHeP1few%2Bg%2F0lwTVMU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7349bd71227-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjU5LCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBNaXNzaW5nIHRvIHdheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo3LCJhdmFpbGFibGUiOjAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg3NDI5LCJ0YXNrc1dpdGhUaW1lIjo3fX1d", "base64"));
  res.end();

  return __filename;
};
