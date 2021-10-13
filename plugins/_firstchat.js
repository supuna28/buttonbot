let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'Ada yang bisa saya bantu?'}
`.trim(), '© supuna', user.banned ? 'JOIN' : '.donasi', user.banned ? ',owner' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Colombo').format('HH')
    res = "වෙල්කම්"
    if (time >= 4) {
        res = "සුබ උදෑසනක්"
    }
    if (time > 10) {
        res = "සුබ දහවලක්"
    }
    if (time >= 15) {
        res = "සුබ සවසක් තේකක් බොමුතේ"
    }
    if (time >= 18) {
        res = "ගුඩ් නයිට් පරිස්සමින් ඉන්න"
    }
    return res
}
