var path = require("path");

/**
 * GET /api/v2/data/challenge/29035
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LqdjTbuUDanffAHGKgfROZjHdr3R%2FVijlaDqwF59JPoz4nvvtj3K2V9UmIXpBRMd0t9P%2F0NGDWoQii5kBobrXpcD0oSg2%2FSXsaSfkGxoulXb2NU13%2FL4wq0yoTU3Kh4Wfaw%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7aeb9170da7-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDM1LCJuYW1lIjoiQXVzdHJhbGlhIC0gTGV2ZWxDcm9zc2luZ09uUmFpbHdheUNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6ODIwLCJhdmFpbGFibGUiOjc5MSwiZml4ZWQiOjE4LCJmYWxzZVBvc2l0aXZlIjo1LCJza2lwcGVkIjozLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjcxMDc1LCJ0YXNrc1dpdGhUaW1lIjoyOX19XQ==", "base64"));
  res.end();

  return __filename;
};
