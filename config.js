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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hIUmxOWWZuc2RvV2REakJyREhLV2wrRFlkRXhNZmZ1eXRkMFcydjFrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlVIQU1aY1BjRWZZRmRWcisxYUsxTFBkMElmMWkyNTdkb1U2K1NXK0hWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS2NuQnVHN012bTZCTTZhRTEvcTJBL3lObnVPNzFiTDVhb0ZrK3NUdW1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdEtTWklyb0Vjc2FNMlFDMHB5SWJZWVJiTy9lM0F5aXJINDBMSnFvUENzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMellhQXNJOEtBcVNzQWplN1JvYW9sMUZ3WWZXS0VFNTV6Q0JSTmhNRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJZTRPYWdwQ0trVGdmL0Fsc2NOc2VRNXlBM0VwVFU3dXJEOWl0eDBwQXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5jTXJ5RXh6S0VPdWVzTm5nZXRJd3RnbmNCM0twUzQrM3piYUx0YVFWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzdCQ01YRmZIMXo0bEg0UkprTjgxQkZqWXF5dTdCR1JHci9udEVGcUpqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkswQVBBVGNlRXc3T0w5c2VSblorY0kvSndNeGJNeTFHZ3pqWnEzUTd0OWhNZnBWNXovckMzVHc3UFQyMEJ4TVZZT1pzNXVXcXdKRlJoakg2T0lrNUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IjFtblpwT0NleUsxVnBEN0xnSGh1eDZYSnBNOGNpb0JhZllTY3duQm0wQ3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlEwb2kxOEhLUWEtVHdxc3pnV2NoTmciLCJwaG9uZUlkIjoiZDhlZDQwZTUtMmJlMS00ODEyLThlNTItYjgyNGYxYmI3NTJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhYOGYrbjRITk0zTURDRnlYcXduVWRHV3JaTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPV3d1NTlTdTZSNmt6NTl0TXlvZVlYU003akE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjk5V1NNTTYiLCJtZSI6eyJpZCI6IjkyMzQxOTE1OTY3MDo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV0grWk1CRU0ySWk3OEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwaDNRaFdQRmU0bVpuaVFURTVaSEltRUZ4WEY0Ykg3WHZpbFU3bUhuN0UwPSIsImFjY291bnRTaWduYXR1cmUiOiJSVXlhek9yODZJNUcxMlFyTHFGeHNKUEpFWHlGOVkvc01jNFRmb1BBNXpHUUYwRlRDZy9KaDBtYnpET0FHcE5RM2syQ3BuQmhtUVBLRks1SFFLME1EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaWJ4akxwZGJ0TGtmczd3NVFEcjJjK1AxU1JMVmNhV3FMUHFFL04ya0xLanlHaTEzaWFudUpSZk4zZmhtakJaQlVWZ0xCSXFscVBwTE5nVmVXZzNuQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MTkxNTk2NzA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWWQwSVZqeFh1Sm1aNGtFeE9XUnlKaEJjVnhlR3grMTc0cFZPNWg1K3hOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyOTE0NjUxfQ=="
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
