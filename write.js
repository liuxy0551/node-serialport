const SerialPort = require('serialport')

// 设置串口号，波特率，关闭自动开启
const port = new SerialPort('/dev/tty.usbserial-14440', {
  baudRate: 9600,
  dataBits: 8, // 数据位
  parity: 'none', // 无校验
  stopBits: 1, // 停止位
  autoOpen: false
})

// 串口打开
port.open(function (err) {
  if (err) {
    return console.log('打开失败: ', err.message)
  } else {
    port.on('data', function (data) {
      console.log('数据接收：' + data.toString('hex'))
      let str = data.toString('hex')
      console.log(str.indexOf('02'))
    })

    // 发送 hex
    let data1 = [0x55, 0x56, 0x00, 0x00, 0x00, 0x01, 0x01, 0xAD]  // 开
    let data2 = [0x55, 0x56, 0x00, 0x00, 0x00, 0x01, 0x02, 0xAE]  // 关
    let data3 = [0x55, 0x56, 0x00, 0x00, 0x00, 0x00, 0x00, 0xAB] // 查状态
    port.write(data3, function (err) {
      if (err) {
        return console.log('写入失败: ' + err.message)
      }
    })
  }
})
