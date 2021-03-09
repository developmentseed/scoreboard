var path = require("path");

/**
 * GET /api/v2/projects/196?as_file=false
 *
 * accept-language: en-US,en;q=0.9
 * host: tasks-backend.openstreetmap.us
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 308;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Tue, 02 Mar 2021 09:56:13 GMT");
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.setHeader("content-length", "351");
  res.setHeader("connection", "close");
  res.setHeader("location", "http://tasks-backend.openstreetmap.us/api/v2/projects/196/?as_file=false");
  res.setHeader("access-control-allow-origin", "*");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDMuMiBGaW5hbC8vRU4iPgo8dGl0bGU+UmVkaXJlY3RpbmcuLi48L3RpdGxlPgo8aDE+UmVkaXJlY3RpbmcuLi48L2gxPgo8cD5Zb3Ugc2hvdWxkIGJlIHJlZGlyZWN0ZWQgYXV0b21hdGljYWxseSB0byB0YXJnZXQgVVJMOiA8YSBocmVmPSJodHRwOi8vdGFza3MtYmFja2VuZC5vcGVuc3RyZWV0bWFwLnVzL2FwaS92Mi9wcm9qZWN0cy8xOTYvP2FzX2ZpbGU9ZmFsc2UiPmh0dHA6Ly90YXNrcy1iYWNrZW5kLm9wZW5zdHJlZXRtYXAudXMvYXBpL3YyL3Byb2plY3RzLzE5Ni8/YXNfZmlsZT1mYWxzZTwvYT4uICBJZiBub3QgY2xpY2sgdGhlIGxpbmsu", "base64"));
  res.end();

  return __filename;
};
