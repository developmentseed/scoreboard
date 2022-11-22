var path = require("path");

/**
 * GET /api/v2/data/challenge/29002
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dylEoiCVadtyLrg9CbfNdUHMAe1x8m7fEE%2F3Qpc3U3D6PpIcSn6Ys4ypvhAdYAK8SqYb1fpUWOKi9xogVW70BV8hum0cOqAIrC28FNejzRakXWKlY%2F44mbfbXkyE%2B2cjBQg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c20fd80783-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDAyLCJuYW1lIjoiTm9yZGljIHwgUGFyY2VsIGxvY2tlcnMgbm90IG1hcHBlZCBsb2NrZXJzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTMsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjEzLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg1NzQ5LCJ0YXNrc1dpdGhUaW1lIjoxM319XQ==", "base64"));
  res.end();

  return __filename;
};
