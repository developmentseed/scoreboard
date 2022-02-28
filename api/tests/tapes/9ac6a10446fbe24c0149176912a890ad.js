var path = require("path");

/**
 * GET /api/v2/data/challenge/15916
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

  res.write(new Buffer("W3siaWQiOjE1OTE2LCJuYW1lIjoiRWFzdCBWaWxsYWdlIGJ1c2luZXNzZXMiLCJhY3Rpb25zIjp7InRvdGFsIjo2MjUsImF2YWlsYWJsZSI6NjE0LCJmaXhlZCI6NywiZmFsc2VQb3NpdGl2ZSI6Mywic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoxMzg2NTMsInRhc2tzV2l0aFRpbWUiOjExfX1d", "base64"));
  res.end();

  return __filename;
};
