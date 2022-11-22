var path = require("path");

/**
 * GET /api/v2/data/challenge/29657
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=6.9999987317715e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U6bs7%2FMkcWLIcdWU6u6IKi49ej1zxJa4cOgKG555YGPp9EzwEV2at3o8NFq99QRCUpMSk%2B05CsvduAwVvmM8siEzuXPyCfWRK5jCIST4Fei9dlxehRiaID9HjuhtKU5bVg0%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e736d97012b5-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NjU3LCJuYW1lIjoiQXVzdHJhbGlhIC0gVmljdG9yaWEgLSBJbXBvc3NpYmxlIGFuZ2xlcyAtIEtlZXBSaWdodCEiLCJhY3Rpb25zIjp7InRvdGFsIjo5LCJhdmFpbGFibGUiOjAsImZpeGVkIjo1LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjIsInRvb0hhcmQiOjIsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjIxNzg5NCwidGFza3NXaXRoVGltZSI6OX19XQ==", "base64"));
  res.end();

  return __filename;
};
