const axios = require('axios')

const fetchUser = params => axios.get('/api/user', params)

export {
  fetchUser
}