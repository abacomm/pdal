const axios = require('axios')
const { API_KEY } = process.env

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const url = 'https://api.rd.services/platform/conversions'

  await axios({
    method: 'post',
    url: `${url}?api_key=${API_KEY}`,
    headers: {
      'content-type': 'application/json',
    },
    data: event.body,
  })
    .then((response) =>
      callback({ statusCode: response.status, body: response.data })
    )
    .catch((err) => callback(err))
}
