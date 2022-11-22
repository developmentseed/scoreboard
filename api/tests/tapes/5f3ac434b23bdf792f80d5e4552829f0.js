var path = require("path");

/**
 * GET /api/v2/data/challenge/30116
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=9.0000012278324e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jGVuoTrjLochfBx8KeEJVZ1qtZzfUheLhlSvZQCCRx%2BDB3A4pdHuMceGrkrsv%2Fg8grN11W5w9tVuWH0PxuKsMOzhA2dZGM4MjxztWi3J7LjjtPcLPzsS%2FHg%2FdkSy2z0%2FrvA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e6fdaf98076e-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjMwMTE2LCJuYW1lIjoiUEhMIC0gU3Bpa3lCdWlsZGluZ0NoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTgyOCwiYXZhaWxhYmxlIjoxODI3LCJmaXhlZCI6MSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3MDMzOCwidGFza3NXaXRoVGltZSI6MX19XQ==", "base64"));
  res.end();

  return __filename;
};
