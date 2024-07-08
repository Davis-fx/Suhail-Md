const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_21_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MixcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3V3Ry9tKzFSSFFyV2RESWNTTDI2cVlWT29Xamh5WVo1QU1oNUVLdGQ4Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQxNzg3MDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NzIyMDc3OTE1NDY4MTZBQ0E3RjE3MTQyMTdFN0Y0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MzQwOTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUlfMVN0WUVRRVM4UG5nMlZGakNuUVwiLFxuICBcInBob25lSWRcIjogXCIyMjRiMDIwMi03ZjU4LTQ4OTMtOTBkMi1hYWM1NDUwMjI0NTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxMTMsXG4gICAgICA0MyxcbiAgICAgIDI1NCxcbiAgICAgIDIyNixcbiAgICAgIDI0OSxcbiAgICAgIDE3MyxcbiAgICAgIDI1MixcbiAgICAgIDEwNSxcbiAgICAgIDExOCxcbiAgICAgIDIxNCxcbiAgICAgIDE1MSxcbiAgICAgIDEyOCxcbiAgICAgIDE1NyxcbiAgICAgIDE1OCxcbiAgICAgIDI3LFxuICAgICAgMjUwLFxuICAgICAgMTY3LFxuICAgICAgMTI5LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE3NixcbiAgICAgIDMwLFxuICAgICAgNjMsXG4gICAgICAyMDAsXG4gICAgICAxMSxcbiAgICAgIDIwOSxcbiAgICAgIDEyLFxuICAgICAgMTcwLFxuICAgICAgMTY0LFxuICAgICAgMTc4LFxuICAgICAgMTI4LFxuICAgICAgMTg5LFxuICAgICAgMixcbiAgICAgIDI1NSxcbiAgICAgIDExMyxcbiAgICAgIDE5NyxcbiAgICAgIDIyMyxcbiAgICAgIDIwMSxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MUwxTEc3U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTc4NzAyMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXVsbGFcIixcbiAgICBcImxpZFwiOiBcIjE0MzQ5OTM1MzY2OTY3OTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05taHE1MEdFS1g3cnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTUQxUkoyTi9vUDV4ZHdLR05WNVk5WWd0NTAyNlA5TlNYdTRMWHRJTCtTVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrS256a0grd2x6dG1XSnhPMzhMMWxxdWJiWXlmS2k3M2phN0JMbExWVmNsVTduVkQ5Ny84QlNTcmVwV2o3M0M0U0pVNkhzelI5S2NjbjkxaFJhSjlCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIQUFmbWFTWStuTGZTRk43WE5pTmdQSnIzZjR3WUtLMEVhdk1zNnJ0MTJYdnNocUQ5R1RwVHdwTXB1ZVlDVldnSDlLSDJSQWNJZFA2NFVnUXZWRGdoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxNzg3MDIwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQzNDA4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxIMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEgyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTDNmUUt1N3RjWWlSNjlaMzVDM2VGQWNydnlHbmo5bTlQcEsvbkNKaTVzST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjcyMTM4OTY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MzQwOTIwODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mulla",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
