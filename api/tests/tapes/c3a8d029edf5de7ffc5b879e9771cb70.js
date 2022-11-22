var path = require("path");

/**
 * GET /api/v2/data/challenge/28920
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2BmYswaym0nP3%2FDlhnA2qYfcqRTbRFFnTNpYjOv8L0qSLa38i4hRMC%2BZ%2BZV5OxhEALR%2FQl6aa5Y7CvD3JNg1F8mzrzYw5Zb9i4pQrp32R7%2BkRxoC6P8IshxEsSqDK1TzasY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7e2a87b0db5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4OTIwLCJuYW1lIjoiVW5pdGVkIEFyYWIgRW1pcmF0ZXMgLSBTaGFycCBBbmdsZSBSb2FkcyIsImFjdGlvbnMiOnsidG90YWwiOjIsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTg0MTg4MywidGFza3NXaXRoVGltZSI6Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
