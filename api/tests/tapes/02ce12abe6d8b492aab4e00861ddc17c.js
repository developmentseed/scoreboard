var path = require("path");

/**
 * GET /api/v2/data/challenge/29679
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JOSuCVrz5tS0U4%2F13IOguzTvvtD%2BkAv6d%2F8uUueCDpdKGausxq62IpqEERHySoEz9hJkgNFrrIL84xd85ZEtAh8lchqFaIDXc37Xph6k7BeMuGbaTQVHcPjPW7dMMNjguYQ%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72d2a2c076e-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5Njc5LCJuYW1lIjoiV2VyeWZpa2FjamEgcHJ6eXN0YW5rw7N3IGF1dG9idXNvd3ljaCB6IHRhZ2llbSBjb3ZlcmVkPXllcyIsImFjdGlvbnMiOnsidG90YWwiOjM1NDksImF2YWlsYWJsZSI6MzI2MCwiZml4ZWQiOjI1NywiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MTgsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTMsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI0MTQwLCJ0YXNrc1dpdGhUaW1lIjoyODl9fV0=", "base64"));
  res.end();

  return __filename;
};
