var path = require("path");

/**
 * GET /api/v2/data/challenge/28987
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eGw42asmhaoVizouijIvUkyXynNm4EaVmFh%2Blcskc85CD8N5TJ0CFinQOlWqa0ZCaC9EiOsP2FVIznodVtrcv%2Bg3t1mvfTzPB9XM7lKySUH2OSKl1X4Q1apr49UJiwIeR5U%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c8afd00d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTg3LCJuYW1lIjoiQ29sb21iaWEgLSBEdXBsaWNhdGVNYXBGZWF0dXJlQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoxMjQxLCJhdmFpbGFibGUiOjEyNDAsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMzOTQyOSwidGFza3NXaXRoVGltZSI6MX19XQ==", "base64"));
  res.end();

  return __filename;
};
