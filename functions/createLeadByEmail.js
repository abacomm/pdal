const axios = require('axios')
const { API_KEY } = process.env

exports.handler = (event, context, callback) => {
  const url = 'https://api.rd.services/platform/conversions'
  const email = event.queryStringParameters.email

  if (!event.queryStringParameters.email) return ''

  axios({
    method: 'post',
    url: `${url}?api_key=${API_KEY}`,
    data: JSON.stringify({
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'teste_coversion_func',
        email,
      },
    }),
  })
    .then((response) => ({ statusCode: response.status, body: response.data }))
    .catch((err) => callback(err))
}
