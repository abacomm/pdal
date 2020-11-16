const axios = require('axios')
const { API_KEY } = process.env

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const url = 'https://api.rd.services/platform/conversions'

  const response = await axios.post(`${url}?api_key=${API_KEY}`, event.body)

  return {
    statusCode: 200,
    body: response,
  }
}
