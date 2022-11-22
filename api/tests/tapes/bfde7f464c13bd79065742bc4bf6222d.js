var path = require("path");

/**
 * GET /api/v2/data/challenge/29765
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cbkgv1mXvOgpDjmKfJAUySxPpnNpDIO839CX3VfKcb8BYnl0v%2BtS82T%2BZxBwWDyFVMahvMhCXz6A4mu6fvVO%2FY%2BsPveKu%2Fd%2FqLuFVuQ3WgYKYuulJjP5j5I2CSOhgbLVLNU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7207c160c3f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzY1LCJuYW1lIjoiQ2xhc2lmaWNhY2nDs24gZGUgY29tZXJjaW9zIG1hcGVhZG9zIGRlIGZvcm1hIGdlbsOpcmljYSAoc2hvcD15ZXMpIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDE3NywiYXZhaWxhYmxlIjo0MTY0LCJmaXhlZCI6MTEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjIsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6OTExMjYxLCJ0YXNrc1dpdGhUaW1lIjoxM319XQ==", "base64"));
  res.end();

  return __filename;
};
