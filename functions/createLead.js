import fetch from 'node-fetch'

const url = `https://api.rd.services/platform/conversions?api_key=${process.env.API_KEY}`

exports.handler = (data) => {
  return fetch(url, { method: 'POST', body: JSON.stringify(data) })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }))
}
