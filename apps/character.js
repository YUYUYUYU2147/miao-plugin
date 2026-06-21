import { uploadCharacterImg } from './character/ImgUpload.js'
import { getOriginalPicture } from './profile/ProfileUtils.js'
import Avatar from './character/AvatarCard.js'
import Wife from './character/AvatarWife.js'
import * as AliasManager from './character/AliasManager.js'
import { App } from '#miao'

let app = App.init({
  id: 'character',
  name: '角色查询'
})

app.reg({
  character: {
    rule: /^#喵喵角色卡片$/,
    fn: Avatar.render,
    check: Avatar.check,
    name: '角色卡片'
  },
  uploadImg: {
    rule: /^#*(喵喵)?(上传|添加)(.+)(照片|写真|图片|图像)\s*$/,
    fn: uploadCharacterImg,
    name: '上传角色写真'
  },
  wife: {
    rule: Wife.reg,
    fn: Wife.render,
    describe: '#老公 #老婆 查询'
  },
  originalPic: {
    rule: /^#?(获取|给我|我要|求|发|发下|发个|发一下)?原图(吧|呗)?$/,
    fn: getOriginalPicture,
    describe: '【#原图】 回复角色卡片，可获取原图'
  },
  addAlias: {
    rule: /^#别名添加\s*\S+\s*\S+$/,
    fn: AliasManager.addAlias,
    name: '添加角色别名'
  },
  removeAlias: {
    rule: /^#别名删除\s*\S+$/,
    fn: AliasManager.removeAlias,
    name: '删除角色别名'
  },
  listAliases: {
    rule: /^#自定义别名列表$/,
    fn: AliasManager.listAliases,
    name: '自定义别名列表'
  }
})

export default app
