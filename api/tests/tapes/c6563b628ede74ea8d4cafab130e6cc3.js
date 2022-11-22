var path = require("path");

/**
 * GET /api/v2/data/challenge/28845
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=1.1000000085915e-05");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H0qH94qVVc1e3B1hxsmd3Rl7%2FN5aNniFIg6TfS4JO8LoZdK3Lrm5359DWA%2FnPDyfGqCiq5ec4udTwsXw%2Fnx%2FhwlLaBdHPgT2GnBsM73%2FyaY4Ea8JYicmlVYpuUhLr%2FtrkGo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e8173e0e0779-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODQ1LCJuYW1lIjoiSG9uZyBLb25nIFNBUiBDaGluYSAtIE92ZXJsYXBwaW5nIFdheXMiLCJhY3Rpb25zIjp7InRvdGFsIjo1LCJhdmFpbGFibGUiOjUsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};
