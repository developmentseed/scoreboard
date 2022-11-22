var path = require("path");

/**
 * GET /api/v2/data/challenge/29631
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=3.9999995351536e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tU5T%2F2bNeFa6SdncPLDuKVpw0rIk9c2pi87pcv0NkdTwFxja7rkZF0G7jvzGxQga8wwJURdxzL%2BSaJAVMekCZ8dlB0RXrG1lcZjZm2GezSlPSg4tFy55PLYwD40m3fh4SY4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e742db6841d0-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjMxLCJuYW1lIjoiQXVzdHJhbGlhIC0gTlNXIC0gTWlzc2luZyBmcm9tIHdheSAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjoyOCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyNiwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzU3NzM0LCJ0YXNrc1dpdGhUaW1lIjoyOH19XQ==", "base64"));
  res.end();

  return __filename;
};
