const SerialPort = require('serialport')

// 设置串口号，波特率，关闭自动开启
const port = new SerialPort('/dev/tty.usbserial-14440', {
  baudRate: 9600,
  dataBits: 8, // 数据位
  parity: 'none', // 无校验
  stopBits: 1, // 停止位
  autoOpen: false
})

// 接收数据
port.on('data', function (data) {
  console.log('接收到的数据：' + data.toString('hex'))
})

let device = 'unconnected'

// 串口打开
function open () {
  port.open(function (err) {
    if (err) {
      device = 'unconnected'
      return console.log('打开失败: ', err.message)
    }
    device = 'connected'
  })
}

// 给串口发送数据
function write (isOpen) {
  if (device === 'connected') {
    // 发送 hex
    let data1 = [0x55, 0x56, 0x00, 0x00, 0x00, 0x01, 0x01, 0xAD]  // 继电器1开
    let data2 = [0x55, 0x56, 0x00, 0x00, 0x00, 0x01, 0x02, 0xAE]  // 继电器1关
    let data3 = [0x55, 0x56, 0x00, 0x00, 0x00, 0x00, 0x00, 0xAB] // 查状态
    port.write(isOpen ? data1 : data2, function (err) {
      if (err) {
        return console.log('写入失败: ' + err.message)
      }
    })
  } else {
    console.log('请尝试打开串口')
  }
}

module.exports = {
  open,
  write
}
