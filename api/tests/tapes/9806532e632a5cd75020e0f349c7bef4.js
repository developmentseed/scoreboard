var path = require("path");

/**
 * GET /api/v2/data/challenge/29029
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
  res.setHeader("server-timing", "cf-q-config;dur=8.0000008892966e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KWy4ZBb0Ycai827A7Oy0ypkUBUcgqk%2FoB5hJ84y0rgRiHiursaLB5knvf1rdFBkrCTiukHu8EfqgHjdPXBMpgo5ErGvXe3cEXfQqMeyGd%2FvjbaJufENHPyWF%2BX1tB6bTgrA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b21df60d73-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDI5LCJuYW1lIjoiQXVzdHJhbGlhIC0gSW52YWxpZE1pbmlSb3VuZGFib3V0Q2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjo1LCJhdmFpbGFibGUiOjIsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjoyLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE2MDIwNywidGFza3NXaXRoVGltZSI6M319XQ==", "base64"));
  res.end();

  return __filename;
};
