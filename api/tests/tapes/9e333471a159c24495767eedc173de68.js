var path = require("path");

/**
 * GET /api/v2/data/challenge/30075
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JphvAFsP38lNFFDkUzLu%2BqmHafR7U249unVsHYU9xBuxarA8NavJ0gftmvqwxNAPrT8nNPdmWce3Dd%2BhprvIVl3UVnyT%2BaBkH8CZUYEIZISIiQZQogfmRUGqnuWxWsTM%2BGs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e702cfe10d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDc1LCJuYW1lIjoiQ0ggLSBwbGFjZT1mYXJtIHdpdGhvdXQgbGFuZHVzZT1mYXJteWFyZCIsImFjdGlvbnMiOnsidG90YWwiOjQxOTcsImF2YWlsYWJsZSI6NDE3MSwiZml4ZWQiOjIxLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjUsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE0Njk1NiwidGFza3NXaXRoVGltZSI6MjZ9fV0=", "base64"));
  res.end();

  return __filename;
};
