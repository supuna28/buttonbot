let { execSync } = require('child_process')

let handler = async (m, { conn, text, isROwner }) => {

if (global.conn.user.jid == conn.user.jid) {



await conn.fakeReply(m.chat, 'https://chat.whatsapp.com/CLVbzE22JYKBS8QLCRcsX2', '0@s.whatsapp.net', 'JOIN', 'status@broadcast')
