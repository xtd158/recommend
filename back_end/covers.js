const {ipcMain} = require('electron')
const download = require('download')

const dirName = '/Users/xiaotengda/work/code/antd_pro/resource'

function listen() {
  ipcMain.on('load-cover:url', async (event, arg) => {
    await download(arg, dirName)
    event.reply('load-cover:url-reply', 'success')
  })
}

module.exports = {listen}

