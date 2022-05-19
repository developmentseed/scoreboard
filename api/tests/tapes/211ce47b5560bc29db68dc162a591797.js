var path = require("path");

/**
 * GET /api/v2/data/challenge/15344
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "275");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzQ0LCJuYW1lIjoiQWRkIGRpcmVjdGlvbiB0byBTdG9wIC0gQ2FuYWRhIChPbnRhcmlvKSIsImFjdGlvbnMiOnsidG90YWwiOjExODU1LCJhdmFpbGFibGUiOjEwODE1LCJmaXhlZCI6OTg3LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjo4LCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjQ1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50Ijo0NTk5NDksInRhc2tzV2l0aFRpbWUiOjEwNDB9fV0=", "base64"));
  res.end();

  return __filename;
};
