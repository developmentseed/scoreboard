var path = require("path");

/**
 * GET /api/v2/data/challenge/29702
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=3.9999995351536e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5riEbsq8s1mLfcpT8VZTsN1pdWjp4SOURxYc58fXyFs8yC1KwFkHma%2BzGuXi0suMHGbMtIT2oXjV7CcNE%2F%2Fm4B8cjt6A4fkg6NuqF9aKWqxYbKGLrEFyr%2B5z54HA6rm4eRk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72cdf840fe2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzAyLCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBBZ3JvdmlsYXMgZG8gQnJhc2lsIFBhcnRlIDIgLyBJbmNsdXPDo28gZGUgTm9tZXMgZGUgUnVhIGVtIEFncm92aWxhcyBkbyBCcmFzaWwgcGFydGUgIDIiLCJhY3Rpb25zIjp7InRvdGFsIjoxNTI5LCJhdmFpbGFibGUiOjE1MjksImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
