const Mock = require('mockjs')
exports.getCommonApi = function (app) {
  app.get('/api/user', function (req, res) {
    let result = Mock.mock({
      'name': '@cname'
    })
    res.send(result)
  })
}