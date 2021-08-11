const {ipcMain} = require('electron')

function listen() {
  ipcMain.on('load-cover:url', (event, arg) => {
    console.log(arg) // prints "ping"
    event.reply('load-cover:url-reply', 'pong')
  })
}

module.exports = {listen}

