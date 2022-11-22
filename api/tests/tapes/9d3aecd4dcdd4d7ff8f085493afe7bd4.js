var path = require("path");

/**
 * GET /api/v2/data/challenge/29700
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.0000002122251e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WHx4mTGXlTHOMQ7mo7LmQeazkVfcWsXrDgBtF2azW%2Fn1q8PleJKYrM6rWHBYB4CKhEQUe7Cyl3XUxqBnTZCYx75PwGYm02Byvh6oP1UmjRvvhg34L%2Bor7RyJQgBFlL3mRXw%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e72d0cf911a2-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzAwLCJuYW1lIjoiSW5jbHVzw6NvIGRlIE5vbWVzIGRlIFJ1YSBlbSBBZ3JvdmlsYXMgZG8gQnJhc2lsICAvIEluY2x1c2lvbiBvZiBTdHJlZXQgTmFtZXMgaW4gQWdyb3ZpbGFzIGRvIEJyYXNpbCIsImFjdGlvbnMiOnsidG90YWwiOjE1MjksImF2YWlsYWJsZSI6MTUyOCwiZml4ZWQiOjEsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzY0NjMsInRhc2tzV2l0aFRpbWUiOjF9fV0=", "base64"));
  res.end();

  return __filename;
};
