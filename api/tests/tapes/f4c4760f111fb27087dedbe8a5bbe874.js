var path = require("path");

/**
 * GET /api/v2/data/challenge/29507
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
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9s9CTt3boyW2VsTlFBJ7Na%2FtPDDQrg8HadZGF6pFOPKBrYdk0TlLefAoKAj1qcdLfTvFuNtlqKz5E5xQQX1kR1gRT3btm3I0%2F9NEujO0NoxrS8VBk5D%2Ft49U%2Bn5WkG%2BtHSs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e75f1f400da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTA3LCJuYW1lIjoiQ29tZXLDp29zIENvbXVuaXRhdCBWYWxlbmNpYW5hIGFtYiB3ZWJzaXRlIG5vIG9wZXJhdGl1IiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTQ0LCJhdmFpbGFibGUiOjk3LCJmaXhlZCI6MTMsImZhbHNlUG9zaXRpdmUiOjM0LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE4NzU4NCwidGFza3NXaXRoVGltZSI6MjB9fV0=", "base64"));
  res.end();

  return __filename;
};
