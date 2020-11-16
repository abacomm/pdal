const axios = require('axios')
const { API_KEY } = process.env

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const url = 'https://api.rd.services/platform/conversions'

  const response = await axios({
    method: 'post',
    url: `${url}?api_key=${API_KEY}`,
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(event.body),
  })

  return { statusCode: response.status, body: response.data }
}
