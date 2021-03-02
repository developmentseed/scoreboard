var path = require("path");

/**
 * GET /api/v2/data/challenge/14761
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
  res.setHeader("content-length", "267");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NzYxLCJuYW1lIjoiTWlzc2luZyByb2FkIHNlZ21lbnRzIGluIEtvc292byIsImFjdGlvbnMiOnsidG90YWwiOjY1NzEsImF2YWlsYWJsZSI6Mzc5NSwiZml4ZWQiOjIwNjUsImZhbHNlUG9zaXRpdmUiOjY0Niwic2tpcHBlZCI6NCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo0MCwidG9vSGFyZCI6MjEsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjQ5MDcyLCJ0YXNrc1dpdGhUaW1lIjoyNzc2fX1d", "base64"));
  res.end();

  return __filename;
};
