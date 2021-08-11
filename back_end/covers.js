const {ipcMain} = require('electron')
const download = require('download')

function listen() {
  ipcMain.on('load-cover:url', (event, {cover_url, name, dirName}) => {
    console.log(cover_url)
    download(cover_url, dirName, name)
      .then(() => {
        event.reply('load-cover:url-reply', 'success')
      })
      .catch(() => {
        event.reply('load-cover:url-reply', 'fail')
      })
  })
}

module.exports = {listen}

