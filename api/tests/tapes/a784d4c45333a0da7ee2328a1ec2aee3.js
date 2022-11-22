var path = require("path");

/**
 * GET /api/v2/data/challenge/29663
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000000391701e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vcMkzhWxqkpn1%2FLHItxjNy%2BMO5x98hzzW%2FOvqsBUQcatReAPiuRTzmt0P2bpVG4Yv9Bzqc1%2FOOBh6EhZneNywX4%2FuuKN8Yu3Mi%2BsQe4LGn2hzZDEBHx5%2BPfuQNfa9uRyJCM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7321b2a0773-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjYzLCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEtIFdyb25nIHJlc3RyaWN0aW9uIGFuZ2xlIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjk1LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjo1OSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozMywidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTQ5NzkzLCJ0YXNrc1dpdGhUaW1lIjo5NX19XQ==", "base64"));
  res.end();

  return __filename;
};
