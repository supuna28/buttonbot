let { execSync } = require('child_process')

let handler = async (m, { conn, text, isROwner }) => {

if (global.conn.user.jid == conn.user.jid) {



await conn.fakeReply(m.chat, 'https://chat.whatsapp.com/CLVbzE22JYKBS8QLCRcsX2', '0@s.whatsapp.net', 'JOIN', 'status@broadcast')

 handler.help = ['BOT KINGDOM']

handler.tags = ['host']

handler.command = /^group$/i

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

module.exports = handler
