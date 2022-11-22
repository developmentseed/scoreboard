var path = require("path");

/**
 * GET /api/v2/data/challenge/29025
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
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FLOe1flbP9wcWpbTvpIFMb7Hsq6O2chVg55eWgo3uQPWiusiHEtN5NJICs2Vc8ur9VRYgjgTosP%2F5Im1ypThP7%2Fs2K0i%2FPbj0zLaj7A%2FsY1oS1X1fzV5GgqzIpsBMCbXKeM%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7b51e2973a3-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDI1LCJuYW1lIjoiQXVzdHJhbGlhIC0gSW5jb25zaXN0ZW50Um9hZENsYXNzaWZpY2F0aW9uQ2hlY2siLCJhY3Rpb25zIjp7InRvdGFsIjozMiwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTksImZhbHNlUG9zaXRpdmUiOjcsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NCwidG9vSGFyZCI6MiwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzgyMDk0LCJ0YXNrc1dpdGhUaW1lIjozMn19XQ==", "base64"));
  res.end();

  return __filename;
};
