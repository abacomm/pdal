const axios = require('axios')
const { API_KEY } = process.env

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const body = JSON.parse(event.body)
  const url = 'https://api.rd.services/platform/conversions'

  axios({
    method: 'post',
    url: `${url}?api_key=${API_KEY}`,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Max-Age': '2592000',
      'Access-Control-Allow-Credentials': 'true',
    },
    data: JSON.stringify(body),
  })
    .then((response) => ({ statusCode: response.status, body: response.data }))
    .catch((err) => callback(err))
}
