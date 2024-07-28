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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_20_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhTnNvMHF2cUNHQ2pkeWxYN2hPamp0dUpYSnVhZ3ByN29FTkMyTXpYNGVjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrQzlJOVFka1JZVzRhMjdaS1BxMnVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2NzBjOTE4LTIyN2YtNGJmNS1iZjVmLTJiZmVhY2FkMmIxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDIxOCxcbiAgICAgIDE0MSxcbiAgICAgIDI0NixcbiAgICAgIDYxLFxuICAgICAgODcsXG4gICAgICAyNTQsXG4gICAgICAxNTcsXG4gICAgICAxNjYsXG4gICAgICA5MixcbiAgICAgIDIzOCxcbiAgICAgIDIwMyxcbiAgICAgIDI2LFxuICAgICAgMTk3LFxuICAgICAgMTk5LFxuICAgICAgMjM1LFxuICAgICAgMjUyLFxuICAgICAgMTAzLFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA4NSxcbiAgICAgIDE4NCxcbiAgICAgIDI0MSxcbiAgICAgIDYxLFxuICAgICAgMTE3LFxuICAgICAgMjAwLFxuICAgICAgMTQ4LFxuICAgICAgMjE3LFxuICAgICAgMTM1LFxuICAgICAgNCxcbiAgICAgIDIzMCxcbiAgICAgIDEzMSxcbiAgICAgIDI0MCxcbiAgICAgIDI0LFxuICAgICAgMjAwLFxuICAgICAgMTExLFxuICAgICAgMTY2LFxuICAgICAgMTg4LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFTRlE4MUo3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NjQ3NzQzODo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzU2ODY0MDAyNzg1OTA6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkw4cXBrREVNM2ZtYlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrWU1JclEwSHBBZitMSVN4WnZ6SEhkbWdFUE5xVy9XTWY3TnhGOFhHQ0JVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1pMThzL2R1T1BCUzVYMnllR2R0YzRXVG1iYjdNUjZlOGpIUGR4dk44MFFMMHl2MDAxdDJMWVI4RWc4TGpJdFRxMXVtQzZja3NKeTBRc2c0Rm1zSEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImF6R01nVzBlWEEwRFQvbHZnSnB5WGVnZHdoTEsrOWs1OGZjZmdyRVZUbzd5WGVzQnR3Syt5UjB0RkFBMHZLYkl5V1RDR1ROL3J0MXBydThhdGRJOUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc2NDc3NDM4OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTgzNjMyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
