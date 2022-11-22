var path = require("path");

/**
 * GET /api/v2/data/challenge/29706
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N4HPEicMyo%2FFVbC3Cb5727zlKV5akybunhQHrcakAPm2OfyIgaQV4G%2FOyXMBF2pPHYL0y%2Bwfawb8TRXw3ZWFM58%2F4OEn9Cjdp6h9%2FUO7xwgfiAUNU77KtLR2PlfVsmp%2BNsU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72a6e4d7397-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzA2LCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBjaWRhZGVzIGRlIE1pbmFzIEdlcmFpcyAtIEJyYXNpbCBQYXJ0ZSA0IC8gSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBjaWRhZGVzIGRlIE1pbmFzIEdlcmFpcyAtIEJyYXNpbCwgUGFydCA0IiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTAwMCwiYXZhaWxhYmxlIjoxMDAwLCJmaXhlZCI6MCwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjowLCJ0YXNrc1dpdGhUaW1lIjowfX1d", "base64"));
  res.end();

  return __filename;
};
