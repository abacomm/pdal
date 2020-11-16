const axios = require('axios')
const { API_KEY } = process.env

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const body = JSON.parse(event.body)
  const url = 'https://api.rd.services/platform/conversions'

  await axios({
    method: 'post',
    url: `${url}?api_key=${API_KEY}`,
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(body),
  })
    .then((response) => {
      return response
    })
    .catch((err) => callback(err))
}
