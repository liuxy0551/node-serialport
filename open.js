let SerialPort = require('serialport')

// 设置串口号，波特率，关闭自动开启
var port = new SerialPort('COM3', {
  baudRate: 9600,
  dataBits: 8,        // 数据位
  parity: 'none',     // 奇偶校验
  stopBits: 1,        // 停止位
  // flowControl: false,
  autoOpen: false
})

// console.log(port)
// 串口打开
port.open(function (err) {
  if (err) {
    return console.log('打开失败: ', err.message)
  } else {
    console.log('打开成功')
    // 接受串口数据，并打印到终端
    port.on('data', function (data) {
      console.log('数据接收: ' + data)
    })
    port.write('0x55 0x56 0x00 0x00 0x00 0x01 0x01 0xAD', function (err) {
      if (err) {
        return console.log('Error on write: ' + err.message)
      }
      console.log('message written')
    })
  }
})
