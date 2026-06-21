import fs from 'node:fs'
import path from 'node:path'
import { Meta } from '#miao'
const cfgPath = path.join(import.meta.dirname, '../../config/alias_custom.json')

function loadCustom() {
  try { return JSON.parse(fs.readFileSync(cfgPath, 'utf-8')) } catch { return {} }
}

function saveCustom(data) {
  fs.mkdirSync(path.dirname(cfgPath), { recursive: true })
  fs.writeFileSync(cfgPath, JSON.stringify(data, null, 2), 'utf-8')
}

let customAliases = loadCustom()

for (let [name, entry] of Object.entries(customAliases)) {
  let game = entry.game || 'gs'
  let aliasesStr = entry.aliases || entry
  let meta = Meta.create(game, 'char')
  meta.addAlias({ [name]: aliasesStr })
}

export async function addAlias(e) {
  let msg = e.msg.replace(/^#?/, '')
  let match = msg.match(/^别名添加\s*(\S+)\s*(\S+)$/)
  if (!match) {
    e.reply('格式错误，正确格式：#别名添加 角色名 别名')
    return
  }
  let name = match[1]
  let aliasText = match[2]

  let found = Meta.matchGame('gs', 'char', name)
  if (!found) {
    e.reply(`未找到角色：${name}`)
    return
  }

  let { game, id, data } = found
  let meta = Meta.create(game, 'char')
  let origName = data?.name || id
  let entry = customAliases[origName]
  let existingAliases = entry?.aliases || entry || ''
  let aliasList = existingAliases ? existingAliases.split(',').map(s => s.trim()) : []
  if (aliasList.includes(aliasText)) {
    e.reply(`别名 "${aliasText}" 已存在`)
    return
  }
  aliasList.push(aliasText)

  customAliases[origName] = { game, aliases: aliasList.join(',') }
  saveCustom(customAliases)

  meta.addAlias({ [origName]: aliasText })
  e.reply(`已为 ${origName} 添加别名：${aliasText}`)
}

export async function removeAlias(e) {
  let msg = e.msg.replace(/^#?/, '')
  let match = msg.match(/^别名删除\s*(\S+)$/)
  if (!match) {
    e.reply('格式错误，正确格式：#别名删除 别名')
    return
  }
  let aliasText = match[1]

  let found = Meta.matchGame('gs', 'char', aliasText)
  if (!found) {
    e.reply(`未找到匹配的角色`)
    return
  }

  let { game, id, data } = found
  let meta = Meta.create(game, 'char')
  let origName = data?.name || id
  if (origName.toLowerCase() === aliasText.toLowerCase()) {
    e.reply('不能删除角色本名')
    return
  }

  let entry = customAliases[origName]
  let existingAliases = entry?.aliases || entry || ''
  let aliasList = existingAliases ? existingAliases.split(',').map(s => s.trim()) : []
  let idx = aliasList.indexOf(aliasText)
  if (idx === -1) {
    e.reply(`别名 "${aliasText}" 不是自定义别名，无法删除`)
    return
  }
  aliasList.splice(idx, 1)
  if (aliasList.length > 0) {
    customAliases[origName] = { game, aliases: aliasList.join(',') }
  } else {
    delete customAliases[origName]
  }
  saveCustom(customAliases)

  delete meta.alias[aliasText.toLowerCase()]
  delete meta.alias2[aliasText.toLowerCase()]
  e.reply(`已删除 ${origName} 的别名：${aliasText}`)
}

export async function listAliases(e) {
  let names = Object.keys(customAliases)
  if (names.length === 0) {
    e.reply('暂无自定义别名')
    return
  }
  let lines = names.map(n => {
    let entry = customAliases[n]
    let aliasesStr = entry?.aliases || entry
    return `${n}: ${aliasesStr}`
  })
  e.reply(`自定义别名列表：\n${lines.join('\n')}`)
}
