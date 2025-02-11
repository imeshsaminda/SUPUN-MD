const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SUPUN-MD=3Y1hlTya#zPjwgej-1l01KgLVtsIfXVjjtZ8ZfXl9uiB07Oth3z4', //add your session id
MONGODB: process.env.MONGODB || "mongosh "mongodb+srv://cluster0.4anmk.mongodb.net/" --apiVersion 1 --username punchihewa051", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};

