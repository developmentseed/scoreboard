var path = require("path");

/**
 * GET /api/v2/data/challenge/14504
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
  res.setHeader("content-length", "255");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NTA0LCJuYW1lIjoiTm9uLWNsb3NlZCBhcmVhcyAtIEZyYW5jZSIsImFjdGlvbnMiOnsidG90YWwiOjQ1OSwiYXZhaWxhYmxlIjozMjEsImZpeGVkIjo5MiwiZmFsc2VQb3NpdGl2ZSI6Miwic2tpcHBlZCI6MTAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjUsInRvb0hhcmQiOjksImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjI2NTUxMSwidGFza3NXaXRoVGltZSI6MTM4fX1d", "base64"));
  res.end();

  return __filename;
};
