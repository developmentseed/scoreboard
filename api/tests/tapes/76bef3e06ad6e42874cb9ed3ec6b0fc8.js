var path = require("path");

/**
 * GET /api/v2/data/challenge/29536
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cj6%2BIZXBB5UPyi6Cw5ZDJgjc3LG6bL4OL2ZNrkSeDsVGNB9kaPHveUy2yVzrHtk4mRiQC3jOoiQksmK%2BFaruZuKBeqvn6Lf1ljd5g2UpyatYGJkRo3E3WTku0ZiB49HRowk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e754f92812b5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTM2LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBVbmtub3duSGlnaHdheVRhZ0NoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NSwiYXZhaWxhYmxlIjoxLCJmaXhlZCI6MiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo4MDcwNSwidGFza3NXaXRoVGltZSI6NH19XQ==", "base64"));
  res.end();

  return __filename;
};
