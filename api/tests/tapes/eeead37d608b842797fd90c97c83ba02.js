var path = require("path");

/**
 * GET /api/v2/data/challenge/14488
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "309");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDg4LCJuYW1lIjoiTm9tYnJlcyBkZSBWw61hcyBlbiBBcmdlbnRpbmEgc2Vnw7puIElOREVDL0FyZ2VudGluYSBSb2FkIE5hbWVzIHZpYSBJTkRFQyBEYXRhIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTUwMTMsImF2YWlsYWJsZSI6MTQ5OTMsImZpeGVkIjoxOSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyMTc1ODMsInRhc2tzV2l0aFRpbWUiOjIwfX1d", "base64"));
  res.end();

  return __filename;
};
