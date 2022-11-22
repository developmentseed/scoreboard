var path = require("path");

/**
 * GET /api/v2/data/challenge/28843
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=9.9999997473788e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JbhjCNa6RjSZwbFrGuo67BJLhNxpQLS1%2FOc1DwbZtCv8VMb0X%2FIXQuRLl5wynvEwSr8PXBTVTDiduEbB8erOpi71JZP9yxe6KC6bMJNdPxhzA338L4WsYgY4i6OFrtV0yJY%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e8174e74739b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODQzLCJuYW1lIjoiQ2hpbGUgLSBTaGFycCBBbmdsZSBSb2FkcyAvIMOBbmd1bG9zIGFndWRvcyIsImFjdGlvbnMiOnsidG90YWwiOjEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzI5NzUsInRhc2tzV2l0aFRpbWUiOjF9fV0=", "base64"));
  res.end();

  return __filename;
};
