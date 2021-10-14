let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'THANKS')).buffer(), `

┌〔THANKS TO 〕
⚡MR RAMIKA
⚡HYPER MODS
⚡https://chat.whatsapp.com/E3mdgudd61Y0vxLLJxbX9c6240394974601136
`.trim(), '© supun', 'JOIN', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
 = /^dona(te|si)$/i

module.exports = handler
