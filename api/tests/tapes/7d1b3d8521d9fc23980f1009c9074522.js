var path = require("path");

/**
 * GET /api/v2/data/challenge/28960
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
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=05seSdV%2B1pv1JuuLj4CZsWZM7rySGuXqkJtIZna%2BXqMrXoHz5jc5PmGb4H4NWXtkN85QEOTlZ%2BAdiy1dfU21tsJ8z%2FlnxoC10PMh9VHUR8%2B2G9kgZTe2i8B%2BlQNnJM0O8WI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7c91be40cf6-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTYwLCJuYW1lIjoiQ2FsaWZvcm5pYSBVbm1hcHBlZCBTY2hvb2xzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjIwNCwiYXZhaWxhYmxlIjoyMDA2LCJmaXhlZCI6MTkzLCJmYWxzZVBvc2l0aXZlIjoxLCJza2lwcGVkIjoxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjg3MTY2OSwidGFza3NXaXRoVGltZSI6MTk3fX1d", "base64"));
  res.end();

  return __filename;
};
