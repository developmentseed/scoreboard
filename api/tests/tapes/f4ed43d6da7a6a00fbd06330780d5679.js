var path = require("path");

/**
 * GET /api/v2/data/challenge/29703
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
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cVqyHHPPByKZD02noAGEVuSX3tRNOtKkFpcUISTNvz%2BCn39%2BIF83mt15FsDvWhDcIIZv1RSMiMbgx1Odzeo3zi5zTpLQ6s9TQTGKrHmkAFdFepMASdMl0h9OcD3eldPzUUs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72ace42739b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzAzLCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBjaWRhZGVzIGRlIE1pbmFzIEdlcmFpcyAtICBCcmFzaWwgLyBJbmNsdXNpb24gb2YgU3RyZWV0IE5hbWVzIGluIGNpdGllcyBpbiBNaW5hcyBHZXJhaXMgLSBCcmF6aWwsIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTAwMCwiYXZhaWxhYmxlIjo5OTgsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjY4NTEsInRhc2tzV2l0aFRpbWUiOjJ9fV0=", "base64"));
  res.end();

  return __filename;
};
