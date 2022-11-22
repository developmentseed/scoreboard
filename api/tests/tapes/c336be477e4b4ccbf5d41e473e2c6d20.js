var path = require("path");

/**
 * GET /api/v2/data/challenge/29013
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=v4mJ4G3bMlyhkkQmhlwvAljaoXgRb7N9Y4hozdKldcc0sTZcEmclinzHVHImqrCz6u5u0cVc%2BUMwPVchXfPDWBZHd%2FUvozVFcICRBAP6yld4qWcMjXEysdLYG3xgdrlsSSA%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7bb9de111c1-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDEzLCJuYW1lIjoiQXVzdHJhbGlhIC0gSW50ZXJzZWN0aW9uQXREaWZmZXJlbnRMYXllcnNDaGVjayIsImFjdGlvbnMiOnsidG90YWwiOjEzLCJhdmFpbGFibGUiOjAsImZpeGVkIjoxLCJmYWxzZVBvc2l0aXZlIjo1LCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjcsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjU1NDA4LCJ0YXNrc1dpdGhUaW1lIjoxM319XQ==", "base64"));
  res.end();

  return __filename;
};
