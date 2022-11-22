var path = require("path");

/**
 * GET /api/v2/data/challenge/29596
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
  res.setHeader("server-timing", "cf-q-config;dur=5.9999999848515e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DnERfpKmC%2FNxb%2Fk0HkHYAjsbsGK%2Fc7uAbImvPdazKCA3sWuoc7Ra1HChseKQA7f8UogWjHEs44NzZ9vlbNeUERs1oQPSEYUaHZOTwmW8qtmYIVMh%2BGisG1zGFvxLCvKY04c%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e752bd4d0773-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NTk2LCJuYW1lIjoiQXVzdHJhbGlhIC0gQUNUIC0gRGVhZCBlbmQgb25lIHdheSAtIEtlZXBSaWdodCEgIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTUsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6NywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTY1ODU4LCJ0YXNrc1dpdGhUaW1lIjoxNX19XQ==", "base64"));
  res.end();

  return __filename;
};
