import request from 'superagent'

const rootURL = '/api/v1'

export async function getWeather() {
  const response = await request.get(`${rootURL}/weather`)
  console.log(response.body.address)
  return response.body
}
