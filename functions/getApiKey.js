const { API_KEY } = process.env

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: API_KEY,
  }
}
