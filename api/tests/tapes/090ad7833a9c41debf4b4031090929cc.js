var path = require("path");

/**
 * GET /api/v2/data/challenge/29607
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fbMYsYrRT4Ektx1f%2Fihj4bdav5WpG9Wk7X7zZ0zBYMtJsj5GJ%2F1GcQGLwHumBSrS12N4v8FDOmBmlZ%2BdiJQOjWELZCyWLO7%2BvmLZf9Turtf0BPea5R%2FfvPDjJY987a%2F93Yo%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e74dd98a41c5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjA3LCJuYW1lIjoiTmV3IFplYWxhbmQgLSBEZWFkIGVuZCBvbmUgd2F5IC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjE1LCJhdmFpbGFibGUiOjAsImZpeGVkIjozLCJmYWxzZVBvc2l0aXZlIjoxMSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3NDMxNCwidGFza3NXaXRoVGltZSI6MTV9fV0=", "base64"));
  res.end();

  return __filename;
};
