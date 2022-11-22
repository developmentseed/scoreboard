var path = require("path");

/**
 * GET /api/v2/data/challenge/28829
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=4.9999998736894e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y2H7ZqlvR%2F49c%2BIx343%2BroSB%2Bc51kw9cF7hig9nNdIqgVVPK8Eb5ZJ45HNUe%2Fsj7xGQe7uYh6s7k%2F9YnGeBtMPCDWJLRKu2WTpKljnTXBgy4HdSkqkqo7%2FWGxUt7kl%2B4k1s%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e820ce8912ae-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI4ODI5LCJuYW1lIjoiTmlnZXJpYSAtIEZsb2F0aW5nIFdheXMgLyBEaXNjb25uZWN0ZWQgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjozMDgsImF2YWlsYWJsZSI6MzAyLCJmaXhlZCI6NiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMzM2MjEsInRhc2tzV2l0aFRpbWUiOjZ9fV0=", "base64"));
  res.end();

  return __filename;
};
