var path = require("path");

/**
 * GET /api/v2/data/challenge/14736
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "270");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NzM2LCJuYW1lIjoiSW1wcm92ZSBUcmFuc2l0IENlbnRlcnMgaW4gSG91c3RvbiBNZXRybyBBcmVhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjEsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjIwLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEyMzQ5MDYsInRhc2tzV2l0aFRpbWUiOjIxfX1d", "base64"));
  res.end();

  return __filename;
};
