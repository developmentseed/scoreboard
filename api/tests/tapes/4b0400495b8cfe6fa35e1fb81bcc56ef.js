var path = require("path");

/**
 * GET /api/v2/data/challenge/14289
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "262");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mjg5LCJuYW1lIjoiTmlnZXJpYSBGbG9hdGluZyBSb2Fkd2F5cyIsImFjdGlvbnMiOnsidG90YWwiOjI4MzMsImF2YWlsYWJsZSI6MTkxNCwiZml4ZWQiOjU2MiwiZmFsc2VQb3NpdGl2ZSI6NzAsInNraXBwZWQiOjcxLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjExNiwidG9vSGFyZCI6MTAwLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjozMzg5ODQsInRhc2tzV2l0aFRpbWUiOjkxOH19XQ==", "base64"));
  res.end();

  return __filename;
};
