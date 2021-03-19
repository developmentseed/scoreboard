var path = require("path");

/**
 * GET /api/v2/data/challenge/14554
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "276");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NTU0LCJuYW1lIjoiQ29udmVydCBmb290YmFsbCBwaXRjaCBub2RlcyB0byBhcmVhcyAtIEZyYW5jZSIsImFjdGlvbnMiOnsidG90YWwiOjI1NCwiYXZhaWxhYmxlIjowLCJmaXhlZCI6MTU4LCJmYWxzZVBvc2l0aXZlIjoyMiwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjozMCwidG9vSGFyZCI6NDQsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE3NDQ5MywidGFza3NXaXRoVGltZSI6MjUzfX1d", "base64"));
  res.end();

  return __filename;
};
