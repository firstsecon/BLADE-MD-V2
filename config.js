//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "923419159670";
global.owner = process.env.OWNER_NUMBER || "923419159670";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0sxeGFSaDM3V0p1UitmT2s4anUrb3lqYy9KbEp4bjlkMFVwZ2ZUUWtsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDlkSHh5S1VHWDFwdzMvSkwrUndTL3hGQ0ZCY2N1d3ZPSGdFeU1oMWhWST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Rnp0Wnh1UVF3ZU1VRlZKajhRSVp0d093OFVJL0lDODFpQlpJdnlsdmtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQXRlc1g4cy9LZzBubCtkc1pRMUdkN0NQbHpwQVBTaldvbnVtTnI5eXhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCNWNZZnJLN2VEblM5dU44QndWeWpQcEpQYTRpdmtjdjVWMXJOUEZwVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVwNDhib1E0eXZtK3RhUkI0NXZRUFo0aVlGT3NkbWxXd3JrOHBQOFE3d2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1NaUhsRDRNRGNkV2lHOE5pV3ZVeUl6MUJZZ3FtYjByUDllOW4rNThIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHVkUkdKRSt0K0Jmck9VU2dQUEJHSlJYTjVhNGgwUHVqN1JjWk5oaXZEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJRQmJNai9RUW82NzRqWllZdWN6RFBzTHQxUUZ4aU02VkxtaWo0elBpb2hGU1ZpOXZ3TjRJWld0TG5Hc05SSEdPQ3BXVExEWkNhQlIvTjB0cVVwNEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IlNlVDhOVGhNanIxZTJqc0hnaWZDdDZ1N0dob2MrSzhhdjlETHNTcVBrbms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikc3UG1UR3Q1VEhTWHd0TG9rRXhud3ciLCJwaG9uZUlkIjoiNWI4ZmE5NWYtYzY1Ny00NzU5LTg0ZGItYmFlYWYxZmYyOTQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HYi9Pa0pYUU5ibEtsUmEvUUdERU1DNGl2RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3WCs1WnpRS0k0OUNYdW8xVG1qYzAraWZNUDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFk4QVdGOUYiLCJtZSI6eyJpZCI6IjkyMzQxOTE1OTY3MDozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPU0grWk1CRVBEdGliOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwaDNRaFdQRmU0bVpuaVFURTVaSEltRUZ4WEY0Ykg3WHZpbFU3bUhuN0UwPSIsImFjY291bnRTaWduYXR1cmUiOiIrNVBkS29vNDZ4TE95Q1Evb01tZTU2UEJjRGF0SE9oZHRnMForRXpXczNVUlpXK05SSzdUUFkrTFRaY3BUZDIyVk1uVEJpa3g0OXhHOXFhUGtseDRCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWW1WNFV4bDU3bWZGRnkrY1dqWVcwM2dadVR6T0Z4amh0dVNZb1lyWHNLbDJXMkgwZzdKMFhQTUJ3MG1FNjJpd2JNWEtSSkdkb1dxMVN3SjB6UVpDQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MTkxNTk2NzA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWWQwSVZqeFh1Sm1aNGtFeE9XUnlKaEJjVnhlR3grMTc0cFZPNWg1K3hOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyODk0ODQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdjdiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
  author: process.env.PACK_AUTHER || "BLADE-MD-V2",
  packname: process.env.PACK_NAME || "ALEX",
  botname: process.env.BOT_NAME || "BLADE-MD-V2",
  ownername: process.env.OWNER_NAME || "M ASWAD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
