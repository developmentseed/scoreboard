var path = require("path");

/**
 * GET /api/v2/data/challenge/29809
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:09:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gVEf0FpHTxCIuuca4JgOgmqjZWnpY4ZbMxTNVXYgwgs43EQI9aHLoDBEATsgnNRqrK6W5O%2Fh9No79MY8YnRDQ%2BEZ2%2FJVe5%2FxC%2Fujshfm8pLS6x0x9y2rKsaUDq5WJ7j4hZs%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e71669441006-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5ODA5LCJuYW1lIjoiTXlzdGVyaW91cyBzdXJmYWNlPWNlbWVudCIsImFjdGlvbnMiOnsidG90YWwiOjMyNjIsImF2YWlsYWJsZSI6MzExNywiZml4ZWQiOjE0MiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMDQ3NSwidGFza3NXaXRoVGltZSI6MTQ1fX1d", "base64"));
  res.end();

  return __filename;
};
