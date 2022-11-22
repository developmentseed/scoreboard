var path = require("path");

/**
 * GET /api/v2/data/challenge/29640
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UaQjmrHliYMvYfapZ4n2TJUl%2Bt3izmN%2F62%2Bp8JoIAfb4ggTOBeYek16pDC6ZZydy6X%2BupazU87TcQ4e3FtPCBoClJsqtJ9uhrRUBtBUW7X9mFt5OgZ8L7zVOru4xC%2FQcQ7Y%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e73e1a125fb9-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjQwLCJuYW1lIjoiQXVzdHJhbGlhIC0gU291dGggQVUgLSBGbG9hdGluZyBpc2xhbmRzIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjI2LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMywiZmFsc2VQb3NpdGl2ZSI6NCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjo4LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMzYwNzIsInRhc2tzV2l0aFRpbWUiOjI2fX1d", "base64"));
  res.end();

  return __filename;
};
