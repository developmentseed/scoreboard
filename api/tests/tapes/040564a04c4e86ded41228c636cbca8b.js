var path = require("path");

/**
 * GET /api/v2/data/challenge/30102
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
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OmZdvWRA%2F46%2B17SIINlOGEIZ0Un%2FReVrMHBexlfmeDvFoTtMz%2FExlbVedgBg4HZr1b80IKUiuDK%2BHr0EUfZkuaFnFuQmBIJ201Dy2dExYjLLBkiA%2Bmn%2FK34DkC%2BjZYVWXfA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7004c135fa1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMTAyLCJuYW1lIjoiUmV2aXNhciBcImFlcm93YXk9YWVyb2Ryb21lXCIgZW4gQXJnZW50aW5hIGNvbiBlbCBub21icmUgXCJBaXJwb3J0XCIgIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTI3LCJhdmFpbGFibGUiOjEyNSwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzM1NDI0LCJ0YXNrc1dpdGhUaW1lIjoyfX1d", "base64"));
  res.end();

  return __filename;
};
