var path = require("path");

/**
 * GET /api/v2/data/challenge/29738
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 22 Nov 2022 13:10:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding,Origin");
  res.setHeader("cf-cache-status", "DYNAMIC");
  res.setHeader("server-timing", "cf-q-config;dur=7.9999990703072e-06");
  res.setHeader("report-to", "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ivJTm3XnnBbHG%2BsFbgQr0r%2BpRvV4QfE4g5nNjTDAIwnXWeR0%2BTJOyitT62cIaYZX1lsVgkWUmoiJGg%2BrHi7b%2FwUEll7zLkxlEesBwbTVSHCkEm7NUQFh0wCya%2FoqWeLWER8%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("nel", "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "76e1e7258d9d0d9f-MRS");
  res.setHeader("alt-svc", "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjI5NzM4LCJuYW1lIjoiQVBQT1JUIERFIExBIENBUlRPR1JBUEhJRSBOVU3DiVJJUVVFIMOAIExBIFPDiUNVUklUw4kgQUxJTUVOVEFJUkUgQVVYIFBPUFVMQVRJT05TIERFIERFIERKRU5Ow4kgQVUgTSIsImFjdGlvbnMiOnsidG90YWwiOjQxOCwiYXZhaWxhYmxlIjo0MTgsImZpeGVkIjowLCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjAsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjAsInRhc2tzV2l0aFRpbWUiOjB9fV0=", "base64"));
  res.end();

  return __filename;
};