var path = require("path");

/**
 * GET /api/v2/data/challenge/29030
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cnH5a%2FdmCLx62GM%2FV2uTOlQOMpjRRT3rewzcUF6Hzwmaq6t9RrjtDmbYbKREoB02SRcgcYVeeo2vKtBlJ%2BBg7UB174c%2BCS3F2rv9E05oc0SiGzVe7dPUbqK8QGutXNQcF9U%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b20dd70d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDMwLCJuYW1lIjoiQXVzdHJhbGlhIC0gVGFsbEJ1aWxkaW5nQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjoyOTcsImF2YWlsYWJsZSI6Mjg2LCJmaXhlZCI6OCwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoyLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxODg5MjgsInRhc2tzV2l0aFRpbWUiOjExfX1d", "base64"));
  res.end();

  return __filename;
};
