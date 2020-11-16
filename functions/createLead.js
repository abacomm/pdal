const axios = require('axios')

exports.handler = function createLead(event, context, callback) {
  const url = `https://api.rd.services/platform/conversions`
  const apiKey = process.env.API_KEY
  axios
    .post(`${url}?api_key=${apiKey}`, event.body)
    .then((response) => response)
}
