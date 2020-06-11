const port = require('./port')

let isOpen = false
port.open()

let count = 1
setInterval(() => {
  console.log(count)
  port.write(isOpen)
  isOpen = !isOpen
  count ++
}, 1000)
