var path = require("path");

/**
 * GET /api/v2/data/challenge/15907
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "281");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1OTA3LCJuYW1lIjoiTWlzc2luZyBhbGxvdG1lbnRzIGZyb20gT1MgT3BlbiBHcmVlbnNwYWNlIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NDU2MywiYXZhaWxhYmxlIjoyOTc0LCJmaXhlZCI6MTAxNywiZmFsc2VQb3NpdGl2ZSI6MjY1LCJza2lwcGVkIjo3MywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxMzEsInRvb0hhcmQiOjEwMywiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NzcwNzYsInRhc2tzV2l0aFRpbWUiOjE1ODh9fV0=", "base64"));
  res.end();

  return __filename;
};
