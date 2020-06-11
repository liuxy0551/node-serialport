const port = require('./port')

let isOpen = false
port.open()

let count = 1
setInterval(() => {
  console.log(count)
  isOpen = !isOpen
  port.write(isOpen)
  count ++
}, 1000)
