const axios = require('axios')
const { API_KEY } = process.env

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const body = JSON.parse(event.body)
  const url = 'https://api.rd.services/platform/conversions'

  return axios({
    method: 'post',
    url: `${url}?api_key=${API_KEY}`,
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(body),
  })
    .then((response) => ({ statusCode: response.status, body: response.data }))
    .catch((err) => callback(err))
}
