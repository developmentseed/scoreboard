var path = require("path");

/**
 * GET /api/v2/data/challenge/28911
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=1.0000001566368e-05");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9kQBr6fkIRTFMhUuczaS%2FISJFSBTSi92sw%2BXa9j8j0qspPJQ5TW27EKAQqCOjMcpkQ%2Bpb3eK7nc1shZZI3Am8zr5aYWHhSjh8hvhQmiSOiHAmplk9A38IP8ENrEz844WiNg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7e669970d95-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTExLCJuYW1lIjoiQnVsZ2FyaWEgLSBPdmVybGFwcGluZyBXYXlzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MzYsImF2YWlsYWJsZSI6MzYsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
