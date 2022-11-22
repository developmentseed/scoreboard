var path = require("path");

/**
 * GET /api/v2/data/challenge/29350
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=3.0000010156073e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=18kxWlXcxsiRoh9J84CPJhRk2GVRS3j7hJJNBdqdZ%2F%2FYWnMqTeDyomh4BtLHrTMu1jir%2F9S8TdSU88LKTEfvYrMvqNKqgVn7ajspdIoSFgvxZ7TqIUJS5TO3o31CyAnY5yI%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e76848aa5f9b-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5MzUwLCJuYW1lIjoiTWNEb25hbGQncyB3aXRob3V0IGEgd2lraSB0YWcgMiIsImFjdGlvbnMiOnsidG90YWwiOjEzMDQsImF2YWlsYWJsZSI6OTM2LCJmaXhlZCI6MzA2LCJmYWxzZVBvc2l0aXZlIjo0NSwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo3LCJ0b29IYXJkIjoxMCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MzMxODcwLCJ0YXNrc1dpdGhUaW1lIjozNjd9fV0=", "base64"));
  res.end();

  return __filename;
};
