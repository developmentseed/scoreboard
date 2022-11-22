var path = require("path");

/**
 * GET /api/v2/data/challenge/29792
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jVb8wi4srit1oi6q3NPNGRAak8dN4usfMydlnkCs1jCnJ9wZzlNV3Sv8NSla7Vi8wrkBXp4uoXt4DHmBRd%2FEgtVPCQ6sE7eWq28XFDJITNlpPiWppSBA0SmjDDCnOKYYEfs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71bcc035fdc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzkyLCJuYW1lIjoiUWF0YXIgfCBNaXNzaW5nIFJvYWRzIHwgQWwtRGFheWVuIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjMyLCJhdmFpbGFibGUiOjY0LCJmaXhlZCI6NzgsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NzQsInRvb0hhcmQiOjEyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyOTk4NzYsInRhc2tzV2l0aFRpbWUiOjE2OH19XQ==", "base64"));
  res.end();

  return __filename;
};
