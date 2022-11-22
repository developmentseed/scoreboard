var path = require("path");

/**
 * GET /api/v2/data/challenge/29436
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0YAEwuKnDC9slJA1T2q4BzXXzEeAB7i4ebpMASfu3I5Yoj4NU6GCG1VFoUaC98gmwfnuPJjutV1J8Bqn3DKUvj9jz8qNx3eRTPFe2HFdftq55nG1JBkIqmEryYbinqNYFyo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7667e250d95-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NDM2LCJuYW1lIjoiQ29udmVydGluZyBwYXJraW5nIG5vZGVzIHRvIGFyZWEgLSBTdG9ja2hvbG0sIFN3ZWRlbiIsImFjdGlvbnMiOnsidG90YWwiOjIyNSwiYXZhaWxhYmxlIjoyMTUsImZpeGVkIjoyLCJmYWxzZVBvc2l0aXZlIjo2LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjczOTkzLCJ0YXNrc1dpdGhUaW1lIjoxMH19XQ==", "base64"));
  res.end();

  return __filename;
};
