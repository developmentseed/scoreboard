var path = require("path");

/**
 * GET /api/v2/data/challenge/29633
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
  res.setHeader("server-timing", "cf-q-config;dur=7.0000005507609e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mZHUapjA%2Fihhc1JIoUmYkhZloQOAxsJZDe4evIOHyOfCeUi%2FibR9AAjR5qtSe9sYFlMCz7DOWyPPkU2%2BYukVIt6DTEdeeP3jTUjjceMJG5%2Ba5bQn70ewX6pRTZtVRYtDPH0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e741ef0e0d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjMzLCJuYW1lIjoiQXVzdHJhbGlhIC0gIE5TVyAtIE1peGVkIExheWVyIEludGVyc2VjdGlvbiAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo1NiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTgsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NywidG9vSGFyZCI6MzAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE1MjUwOSwidGFza3NXaXRoVGltZSI6NTZ9fV0=", "base64"));
  res.end();

  return __filename;
};
