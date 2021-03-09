var path = require("path");

/**
 * GET /api/v2/data/challenge/14249
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
  res.setHeader("content-length", "271");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjQ5LCJuYW1lIjoiQ2FycmV0ZXJhcyBjb24gbmFtZT0geSByZWY9IGNvaW5jaWRlbnRlcyIsImFjdGlvbnMiOnsidG90YWwiOjQ1MjEsImF2YWlsYWJsZSI6NDA3NywiZml4ZWQiOjQxOSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoyNSwidG9vSGFyZCI6MCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTIwMjQsInRhc2tzV2l0aFRpbWUiOjQ0Mn19XQ==", "base64"));
  res.end();

  return __filename;
};
