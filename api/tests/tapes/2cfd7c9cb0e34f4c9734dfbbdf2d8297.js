var path = require("path");

/**
 * GET /api/v2/data/challenge/29815
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BOmkluDFxZRBqvSdKzRyOgmw0UBBcn%2FDZ2G8%2F8tqjwfAV3VsbPGgPF0HOnx6fdSTKIPL%2BlLJJDtI3%2BSc52fWVaaLy6N2%2FPijSIPhpDuAk9jHq1C37GBlRPMIsudzjEXx2%2BA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e713fcfa41c5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODE1LCJuYW1lIjoiQWRkIGJ1aWxkaW5ncyB0byBLbGFydmF0dGVuIGluIEVkbW9udG9uLCBBbGJlcnRhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTEsImF2YWlsYWJsZSI6MzMsImZpeGVkIjo2LCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjExLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTgxMDksInRhc2tzV2l0aFRpbWUiOjE4fX1d", "base64"));
  res.end();

  return __filename;
};