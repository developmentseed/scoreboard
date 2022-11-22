var path = require("path");

/**
 * GET /api/v2/data/challenge/29010
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kEy70sK00mrMnm7KUfF%2BkHbQFTdBz4mZywO4p1F6V7igxKQqmSwMj0G%2BPqzL1QJ7BU6dijZFTM%2F282DNZ%2Bfe9qPLwMOVVu4cbj8qtmJHc2Goh53iBEjDh8EM6juUQJ%2BEZ74%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7bf09240cf5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MDEwLCJuYW1lIjoiQXVzdHJhbGlhIC0gRWRnZUNyb3NzaW5nRWRnZUNoZWNrIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjM2LCJhdmFpbGFibGUiOjAsImZpeGVkIjoxMzMsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjUsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjAsInRvb0hhcmQiOjc4LCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyODg4MTMsInRhc2tzV2l0aFRpbWUiOjIzNn19XQ==", "base64"));
  res.end();

  return __filename;
};
