let fetch = require('node-fetch')

let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'BOT KINGDOM')).buffer(), `

┌〔https://chat.whatsapp.com/CLVbzE22JYKBS8QLCRcsX2 〕

├ ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥

└────

`.trim(), '© join', 'OK', '.donasi', m)

handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^dona(te|si)$/i

module.exports = handler
