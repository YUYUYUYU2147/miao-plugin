/*
* 请注意，系统不会读取help_default.js ！！！！
* 【请勿直接修改此文件，且可能导致后续冲突】
*
* 如需自定义可将文件【复制】一份，并重命名为 help.js
*
* */

// 帮助配置
export const helpCfg = {
  // 帮助标题
  title: '琪宝帮助',

  // 帮助副标题
  subTitle: '主人qq1390963734',

  // 帮助表格列数，可选：2-5，默认3
  // 注意：设置列数过多可能导致阅读困难，请参考实际效果进行设置
  colCount: 3,

  // 单列宽度，默认265
  // 注意：过窄可能导致文字有较多换行，请根据实际帮助项设定
  colWidth: 310,

  // 皮肤选择，可多选，或设置为all
  // 皮肤包放置于 resources/help/theme
  // 皮肤名为对应文件夹名
  // theme: 'all', // 设置为全部皮肤
  // theme: ['default','theme2'], // 设置为指定皮肤
  theme: 'all',

  // 排除皮肤：在存在其他皮肤时会忽略该项内设置的皮肤
  // 默认忽略default：即存在其他皮肤时会忽略自带的default皮肤
  // 如希望default皮肤也加入随机池可删除default项
  themeExclude: ['default'],

  // 是否启用背景毛玻璃效果，是为true开启，若渲染遇到问题可设置为false关闭
  bgBlur: false
}

// 帮助菜单内容
export const helpList = [{
  group: '全局帮助',
  list: [{
    icon: 31,
    title: '所有功能必须艾特机器人或 +q/Q',
    desc: '不会开启自动回复，不会开启私聊功能'
  }, {
    icon: 32,
    title: '问题反馈',
    desc: '私聊bot或者群里发送#联系主人+消息即可'
  }]
}, {
  group: 'mys-plugin',
  list: [{
    icon: 33,
    title: '#扫码登录',
    desc: '确保米游社是最新版才能扫码'
  }, {
    icon: 34,
    title: '#云崽帮助',
    desc: '米游全家桶'
  }, {
    icon: 35,
    title: '%帮助',
    desc: '绝区零帮助'
  }]
}, {
  group: '小插件',
  list: [{
    icon: 36,
    title: '#母带/水晶，%母带，#上月水晶',
    desc: '查询资源存货，仅限千绝区零和bbb'
  }, {
    icon: 37,
    title: '#/%更新抽卡记录',
    desc: '详情看抽卡帮助'
  }, {
    icon: 38,
    title: '#[原石]星琼|菲林|水晶|深渊]速报',
    desc: '资源预估'
  }, {
    icon: 39,
    title: '#点歌+歌曲',
    desc: '点歌成功后发送#听几「n=1,2,3...」，不满意就发送#下一页'
  }, {
    icon: 40,
    title: '攻略帮助',
    desc: '游戏前缀【#，*，%】+角色名字+攻略'
  }, {
    icon: 41,
    title: '表情帮助',
    desc: '#meme帮助'
  }, {
    icon: 42,
    title: '戳一戳/单独艾特bot',
    desc: '提供情绪价值神秘小代码'
  }, {
    icon: 43,
    title: 'B站帮助',
    desc: 'b站相关功能'
  }, {
    icon: 44,
    title: 'y帮助',
    desc: '娱乐小功能'
  }, {
    icon: 45,
    title: '#小花火/xhh帮助',
    desc: '主要提供原神和星铁图鉴，绝区零迁移至%帮助'
  }, {
    icon: 46,
    title: '#米游社签到|#签到',
    desc: '米游社签到，别发，一般人没有权限'
  }, {
    icon: 47,
    title: 'core帮助',
    desc: '增加鸣潮和战双帮助'
  }]
}]
