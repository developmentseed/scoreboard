var path = require("path");

/**
 * GET /api/v2/data/challenge/15249
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "256");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MjQ5LCJuYW1lIjoiU0RQIGltcG9ydDogUmVzdGF1cmFudCIsImFjdGlvbnMiOnsidG90YWwiOjM5MDMsImF2YWlsYWJsZSI6MzY1MywiZml4ZWQiOjIxNiwiZmFsc2VQb3NpdGl2ZSI6OCwic2tpcHBlZCI6NiwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxMCwidG9vSGFyZCI6MTAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEwMDQ3NDcsInRhc2tzV2l0aFRpbWUiOjI1MH19XQ==", "base64"));
  res.end();

  return __filename;
};
