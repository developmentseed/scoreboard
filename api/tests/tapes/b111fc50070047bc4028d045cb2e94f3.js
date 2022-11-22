var path = require("path");

/**
 * GET /api/v2/data/challenge/29654
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w37YEAbw%2Bl2jXFjthLqz90wdrPhh5DDa5JEVS7z%2FH7yU41tVZjMDC9vCj50NncUikc%2BYjan2LyihcN1cqMxXFXqur37g116X0oEEarj3u06oculaWmYuKsFaxPNMlCMqDEk%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e736fea70da8-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjU0LCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBGbG9hdGluZyBpc2xhbmRzIC0gS2VlcFJpZ2h0ISIsImFjdGlvbnMiOnsidG90YWwiOjU2LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMywiZmFsc2VQb3NpdGl2ZSI6MTgsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NCwidG9vSGFyZCI6MjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI4MTI1MSwidGFza3NXaXRoVGltZSI6NTZ9fV0=", "base64"));
  res.end();

  return __filename;
};
