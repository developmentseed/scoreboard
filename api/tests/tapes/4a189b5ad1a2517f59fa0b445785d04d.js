var path = require("path");

/**
 * GET /api/v2/data/challenge/14900
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "275");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0OTAwLCJuYW1lIjoiQWRkIHByb3BlciB0YWdzIGZvciBCdXJnZXIgS2luZyAtIFdvcmxkd2lkZSIsImFjdGlvbnMiOnsidG90YWwiOjE4NTAsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjE2OTMsImZhbHNlUG9zaXRpdmUiOjMsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MTUzLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTk5MDMsInRhc2tzV2l0aFRpbWUiOjE4NDh9fV0=", "base64"));
  res.end();

  return __filename;
};
