let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "en" }, ''))
  let json = await res.json()
  if (json.success) m.reply(Milim is now active in this chat!)
  else throw json
}
handler.help = ['bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(bot|simi|hazuki)$/i

module.exports = handler

