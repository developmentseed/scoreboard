var path = require("path");

/**
 * GET /api/v2/data/challenge/29107
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999999823267e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o0xUljSKq29uAtA2XKziLlwnTE3KNHK0yfwWBXwZdfI8%2BzBrKgupJITuw3lC0oX3FLFAiaGF8FMIuw8NsjzQ6EI%2F20Ahrj2UtrKBdMs9jSIsafPn8AxAaD2yyxDVEn86TxM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7a08cf00773-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MTA3LCJuYW1lIjoiRWN1YWRvciAtIE92ZXJsYXBwaW5nRWRnZUNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzAsImF2YWlsYWJsZSI6MzAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
