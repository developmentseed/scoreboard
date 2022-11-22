var path = require("path");

/**
 * GET /api/v2/data/challenge/29301
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WMyikz6qK4%2F%2FszC17JPXG%2FTr5yCGLNsue%2FYgh7JSPQYRfQFEduS2WIDhtSc0vSpy8bYr8pA31KVTPKg03UnsEVcdPfDWsddp4GTW3hrx7EnXn2M%2BUWbBwQ9ELhWtmt6hqj4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e76d5e9c0c3f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzAxLCJuYW1lIjoiSW5kb25lc2lhIC0gU2hhcnAgQW5nbGUgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjoxLCJhdmFpbGFibGUiOjAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjMzNDA4LCJ0YXNrc1dpdGhUaW1lIjoxfX1d", "base64"));
  res.end();

  return __filename;
};
