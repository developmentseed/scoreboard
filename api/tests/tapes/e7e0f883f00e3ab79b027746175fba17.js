var path = require("path");

/**
 * GET /api/v2/data/challenge/29639
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dAu88D46ybf99p9uG1TQp5CsBBs6VfRM5lUKF45RczSYtmJmhaJ3vjsrBUdXXqB1XNITi%2BGImZDxmbKscQ%2F5D5k%2FtLSWHgeuHGERftBwVRX%2BTWve6fuUoLy1Gusy4d%2F2cGM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73e2ee312a2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjM5LCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBEZWFkIGVuZCBvbmUgd2F5IC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjIyLCJhdmFpbGFibGUiOjAsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjoxNiwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjo2LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTcxMDYsInRhc2tzV2l0aFRpbWUiOjIyfX1d", "base64"));
  res.end();

  return __filename;
};
