var path = require("path");

/**
 * GET /api/v2/data/challenge/30027
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W0GRDRN%2BkDgK%2F9Ai%2FcQuumqVb7VpOFkTTIwTyJ1%2FNILFPLfF8oAuE9BdDRxZtoaaUr3uexzjTw%2B0GESISfa22cSHJcdupzOmvQ7il6UPewtqAdrT9LOWC279dCQIeRMCZ44%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e707ee5211a5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDI3LCJuYW1lIjoiQ09MIC0gSW52YWxpZEdlb21ldHJ5Q2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoyLCJhdmFpbGFibGUiOjAsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE2NzAyNSwidGFza3NXaXRoVGltZSI6Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
