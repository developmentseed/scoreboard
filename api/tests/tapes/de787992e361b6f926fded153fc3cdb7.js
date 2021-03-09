var path = require("path");

/**
 * GET /api/v2/data/challenge/15251
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "283");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjUxLCJuYW1lIjoiU0RQIGltcG9ydDogU2Nob29scyBhbmQgT3RoZXIgRWR1Y2F0aW9uYWwgSW5zdGl0dXRpb25zIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTEwMCwiYXZhaWxhYmxlIjoxMDYzLCJmaXhlZCI6MzMsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MywidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NTk2MDgyLCJ0YXNrc1dpdGhUaW1lIjozN319XQ==", "base64"));
  res.end();

  return __filename;
};
