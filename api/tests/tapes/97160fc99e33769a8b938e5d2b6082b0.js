var path = require("path");

/**
 * GET /api/v2/data/challenge/30063
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
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rK3D7spQWz06EzNDYSEEeNWGCj8tYsoy2B9KjxokPxUzSLqPV1tjAwxKKcySDcP%2F3LjXvTjfVOKZDJhEgvetvmOp3tILPfLV8X6klRCadyuw4L5MTFL0i%2BMXRSpGJnCwjhQ%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e702e91712ae-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMDYzLCJuYW1lIjoiSXMgdGhpcyBTdXJmYWNlIFBhcmtpbmc/IFNvdXRoIFNhbHQgTGFrZSBWYWxsZXkiLCJhY3Rpb25zIjp7InRvdGFsIjoxODIwLCJhdmFpbGFibGUiOjEyMDEsImZpeGVkIjo1MzEsImZhbHNlUG9zaXRpdmUiOjUyLCJza2lwcGVkIjozMywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNjUzNywidGFza3NXaXRoVGltZSI6NjE5fX1d", "base64"));
  res.end();

  return __filename;
};
