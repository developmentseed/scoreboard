var path = require("path");

/**
 * GET /api/v2/projects/44?as_file=false
 *
 * accept-language: en-US,en;q=0.9
 * host: tasks-backend.openstreetmap.us
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 308;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Tue, 02 Mar 2021 09:56:22 GMT");
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.setHeader("content-length", "349");
  res.setHeader("connection", "close");
  res.setHeader("location", "http://tasks-backend.openstreetmap.us/api/v2/projects/44/?as_file=false");
  res.setHeader("access-control-allow-origin", "*");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDMuMiBGaW5hbC8vRU4iPgo8dGl0bGU+UmVkaXJlY3RpbmcuLi48L3RpdGxlPgo8aDE+UmVkaXJlY3RpbmcuLi48L2gxPgo8cD5Zb3Ugc2hvdWxkIGJlIHJlZGlyZWN0ZWQgYXV0b21hdGljYWxseSB0byB0YXJnZXQgVVJMOiA8YSBocmVmPSJodHRwOi8vdGFza3MtYmFja2VuZC5vcGVuc3RyZWV0bWFwLnVzL2FwaS92Mi9wcm9qZWN0cy80NC8/YXNfZmlsZT1mYWxzZSI+aHR0cDovL3Rhc2tzLWJhY2tlbmQub3BlbnN0cmVldG1hcC51cy9hcGkvdjIvcHJvamVjdHMvNDQvP2FzX2ZpbGU9ZmFsc2U8L2E+LiAgSWYgbm90IGNsaWNrIHRoZSBsaW5rLg==", "base64"));
  res.end();

  return __filename;
};
