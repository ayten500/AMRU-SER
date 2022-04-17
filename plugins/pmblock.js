const Hisham = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
{
    pattern: "bybaskan ?(.*)",
    fromMe: true,
    desc: "🍁𝙱𝚢 𝙱𝚊𝚜𝚔𝚊𝚗 Ç𝚎𝚟𝚒𝚖 İç𝚒 𝙺𝚒ş𝚒𝚕𝚎𝚛𝚒 𝙱𝚞𝚕𝚞𝚛.",
  },
  async (message, match) => {
    var list = await message.client.chats.get(message.jid).presences
    if (!list) return await message.sendMessage('🍁𝙱𝚢 𝙱𝚊𝚜𝚔𝚊𝚗 Ç𝚎𝚟𝚒𝚖 İç𝚒 𝙺𝚒𝚖𝚜𝚎 𝙱𝚞𝚕𝚞𝚗𝚊𝚖𝚊𝚍ı.❌')
    const online = [...Object.keys(list)]
    var res = online.map((e) => "@" + e.split("@")[0]).join("\n")
    await message.client.sendMessage(message.jid,
      "*ÇEVRİM İÇİ OLANLAR*\n\n" + res,MessageType.text,
      { contextInfo: { mentionedJid: online } }
    )
  }
)
