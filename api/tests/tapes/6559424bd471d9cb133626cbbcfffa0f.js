var path = require("path");

/**
 * GET /api/v2/data/challenge/14261
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "276");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjYxLCJuYW1lIjoiTWlzc2luZyByb2FkcyBpbiBOaWFnYXJhLCBPTiwgQ2FuYWRhICIsImFjdGlvbnMiOnsidG90YWwiOjcxMDksImF2YWlsYWJsZSI6NTI0MywiZml4ZWQiOjEyODksImZhbHNlUG9zaXRpdmUiOjI0MSwic2tpcHBlZCI6NzYsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjI2LCJ0b29IYXJkIjozNCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6Mjc2MTY1LCJ0YXNrc1dpdGhUaW1lIjoxODY2fX1d", "base64"));
  res.end();

  return __filename;
};
