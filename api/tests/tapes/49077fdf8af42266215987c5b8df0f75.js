var path = require("path");

/**
 * GET /api/v2/data/challenge/14295
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
  res.setHeader("content-length", "269");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0Mjk1LCJuYW1lIjoiTWFwcGluZyBCdWlsZGluZ3MgaW4gTGFrZSBDaGFybGVzLCBMQSIsImFjdGlvbnMiOnsidG90YWwiOjE0NTksImF2YWlsYWJsZSI6ODM0LCJmaXhlZCI6MzcsImZhbHNlUG9zaXRpdmUiOjM5Niwic2tpcHBlZCI6MywiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxODksInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjEzMTkxLCJ0YXNrc1dpdGhUaW1lIjo2MjV9fV0=", "base64"));
  res.end();

  return __filename;
};
