var path = require("path");

/**
 * GET /api/v2/data/challenge/29028
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HfBZbVPfuQ8PAACCJr3a1fcK0x6UAHGa0OF43rnT0wvKXSm%2FdP5uxaFvJtn08a6wLhtBYEI%2F5lkGzcTRoFLgPNVUkDUCFIrCTa56qbWgnGEBztzGcRYAq4XcN1Dmc8peYmg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b42bb912ae-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDI4LCJuYW1lIjoiQXVzdHJhbGlhIC0gQnVpbGRpbmdSb2FkSW50ZXJzZWN0aW9uQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoxNDk0LCJhdmFpbGFibGUiOjAsImZpeGVkIjo5OTEsImZhbHNlUG9zaXRpdmUiOjgyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjMwLCJ0b29IYXJkIjozODMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjo4LCJhdmdUaW1lU3BlbnQiOjI2OTgxMiwidGFza3NXaXRoVGltZSI6MTQ5NH19XQ==", "base64"));
  res.end();

  return __filename;
};
