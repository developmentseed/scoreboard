var path = require("path");

/**
 * GET /api/v2/data/challenge/15892
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
  res.setHeader("content-length", "249");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1ODkyLCJuYW1lIjoiSG9zcGl0YWwgb3BlcmF0b3I6dHlwZSIsImFjdGlvbnMiOnsidG90YWwiOjk5NywiYXZhaWxhYmxlIjo5ODUsImZpeGVkIjoxMiwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxNTA2NzQsInRhc2tzV2l0aFRpbWUiOjEyfX1d", "base64"));
  res.end();

  return __filename;
};
