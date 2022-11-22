var path = require("path");

/**
 * GET /api/v2/data/challenge/29043
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=8.999999408843e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IZ7ZtndV%2Bz2iRizUj%2FvwowRkzM8s2te8kWooR29FFTcPdBreKSe0%2BBloBOYxWLFaeCmuuEcbsK%2BT7dbOxcqOdaesTCxrvRAs8DU52LJ1oEtLylWXZJYZ6DuSN7y9iT5UX0Y%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7aecf7b41fc-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDQzLCJuYW1lIjoiR2xvYmFsIC0gSW52YWxpZCBXYXkgR2VvbWV0cnkiLCJhY3Rpb25zIjp7InRvdGFsIjo0NjIsImF2YWlsYWJsZSI6MTcsImZpeGVkIjoyNDksImZhbHNlUG9zaXRpdmUiOjEwLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjE4NiwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjUwMDAwLCJ0YXNrc1dpdGhUaW1lIjo0NDV9fV0=", "base64"));
  res.end();

  return __filename;
};
