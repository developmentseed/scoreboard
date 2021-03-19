var path = require("path");

/**
 * GET /api/v2/data/challenge/16804
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Mon, 22 Feb 2021 09:47:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "379");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE2ODA0LCJuYW1lIjoidW5zaWduZWRfcmVmIG5pZXpnb2RueSB6IG9maWNqYWxueW0gc3lzdGVtZW0gbnVtZXLDs3cgdHJhcyB3IFBvbHNjZSAvIFVuc2lnbmVkIFJvdXRlIE51bWJlciAodW5zaWduZWRfcmVmKSBub3QgZm9sbG93aW5nIG9mZmljaWFsIHJvdXRlIG51bWJlciBzeXN0ZW0gaW4gUG9sYW5kIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDMzLCJhdmFpbGFibGUiOjQzMywiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MCwidGFza3NXaXRoVGltZSI6MH19XQ==", "base64"));
  res.end();

  return __filename;
};
