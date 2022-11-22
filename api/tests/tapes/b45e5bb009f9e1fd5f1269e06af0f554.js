var path = require("path");

/**
 * GET /api/v2/data/challenge/29735
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
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tDc%2FF2qbvU71M%2FLvE31pZKo9yik%2BbqkPywSPIps6VhMx%2B3%2Fh1MSQoWj12T59VxZFJ%2FfN37jiftk3VWdnOaQ60gSsstGA33lKjVvA4556ob6YPToY2vLG1WnunS8ekbN3RNU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7259aae0cf6-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzM1LCJuYW1lIjoiQWRkIHN1cGVyZmljZSBhcyAgdmlhcyBkZSBGb3J0YWxlemEiLCJhY3Rpb25zIjp7InRvdGFsIjoyNDkzMSwiYXZhaWxhYmxlIjoyNDkyMSwiZml4ZWQiOjEwLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQzMjcxLCJ0YXNrc1dpdGhUaW1lIjoxMH19XQ==", "base64"));
  res.end();

  return __filename;
};
