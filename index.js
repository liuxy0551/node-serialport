const port = require('./port')
const websocket = require('./websocket')

// 与服务器建立 socket 连接
let wsServer = 'ws://30.40.44.176:9090/door/1'
websocket.client.connect(wsServer)

// 打开串口
port.open()
