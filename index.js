const port = require('./port')
const websocket = require('./websocket')

// 与服务器建立 socket 连接
// global.wsServer = 'ws://30.40.44.176:9090/door/1234'
global.wsServer = 'ws://evaluation.syedu.tech:9090/door/1234'
websocket.client.connect(global.wsServer)

// 打开串口
port.open()
