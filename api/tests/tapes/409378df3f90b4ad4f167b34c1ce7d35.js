var path = require("path");

/**
 * GET /api/v2/data/challenge/15302
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "257");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzAyLCJuYW1lIjoiRml4IHdheXMgd2l0aG91dCB0YWcgLSBGcmFuY2UgKDA3KSIsImFjdGlvbnMiOnsidG90YWwiOjUzLCJhdmFpbGFibGUiOjAsImZpeGVkIjo0OSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjozLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo3MTEwMSwidGFza3NXaXRoVGltZSI6NTN9fV0=", "base64"));
  res.end();

  return __filename;
};
