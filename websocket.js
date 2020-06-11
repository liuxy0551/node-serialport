const WebSocketClient = require('websocket').client
const port = require('./port')

let client = new WebSocketClient()

// 连接失败
client.on('connectFailed', function (error) {
  console.log('Connect Error: ' + error.toString())
})

client.on('connect', function (connection) {
  // 连接成功
  console.log('WebSocket Client Connected')
  // 出现错误
  connection.on('error', function (error) {
    console.log('Connection Error: ' + error.toString())
  })
  // 断开连接
  connection.on('close', function () {
    console.log('echo-protocol Connection Closed')
  })
  // 接收数据
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'")

      port.write(message.utf8Data === 'open')
    }
  })
})

module.exports = {
  client
}

// client.connect('ws://30.40.44.176:9090/door/1')
