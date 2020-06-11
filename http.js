const axios = require('axios')

async function getData () {
  const url = 'http://test.operation.syedu.tech/api/manage/banner/index?type=2'
  let res = await axios({ method: 'GET', url })
  return res.data.data ? 'open' : 'close'
}

let status = getData()
console.log(status)

module.exports = getData()
