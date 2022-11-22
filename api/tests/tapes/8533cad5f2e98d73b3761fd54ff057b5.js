var path = require("path");

/**
 * GET /api/v2/data/challenge/28850
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
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wnhw%2FT%2FSOI1Vlpak8nRxztjYdgHWtcSWWe1aRjX%2B%2BJDTBwY1%2B6RIYR7uynf9TK4SKoHuEUgjZmkYm9oRPeMJPOWM8slEKzLaQoaS4h0nTPJ5AEKVeEYxhExh1JtkUChgWVE%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e813d9dc16a9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODUwLCJuYW1lIjoiSXJhbiAtIE92ZXJsYXBwaW5nIFdheXMiLCJhY3Rpb25zIjp7InRvdGFsIjoxMzMsImF2YWlsYWJsZSI6MTMzLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
