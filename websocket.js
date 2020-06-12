const WebSocketClient = require('websocket').client
const port = require('./port')

let client = new WebSocketClient()

// 连接失败
client.on('connectFailed', function (error) {
  console.log('Connect Error: ' + error.toString())
})

let start = new Date()

client.on('connect', function (connection) {
  // 连接成功
  console.log('WebSocket Client Connected')
  // 出现错误
  connection.on('error', function (error) {
    console.log('Connection Error: ' + error.toString())
  })
  // 断开连接
  connection.on('close', function (e) {
    console.log('上次连接时长：' + (new Date() - start) + 'ms')
    console.log('echo-protocol Connection Closed, code: ' + e)
    client.connect(global.wsServer)
  })
  // 接收数据
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'")

      let isOpen
      message.utf8Data === 'open' && (isOpen = true)
      message.utf8Data === 'close' && (isOpen = false)
      if (isOpen === true || isOpen === false) {
        port.write(isOpen)
      }
    }
  })
})

module.exports = {
  client
}

// client.connect('ws://30.40.44.176:9090/door/1')
