var path = require("path");

/**
 * GET /api/v2/data/challenge/29026
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.9999999772772e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pF%2BT8XqZ%2BhP681YVIP45bWpJcVVGspdveok%2FM317jiTzjWxhMqW66BFK9Z1VGsLpq4ctxZPPgVICcMblPLFKNbj7TcTjfbWuN3X41OkFjR6DE%2BmGUq5mx%2B9hs2WMbenQNRg%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b508dc0773-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDI2LCJuYW1lIjoiQXVzdHJhbGlhIC0gSW52YWxpZFR1cm5SZXN0cmljdGlvbkNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjU0LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMzIsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6ODQsInRvb0hhcmQiOjM3LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0MTc0MDAsInRhc2tzV2l0aFRpbWUiOjI1NH19XQ==", "base64"));
  res.end();

  return __filename;
};
