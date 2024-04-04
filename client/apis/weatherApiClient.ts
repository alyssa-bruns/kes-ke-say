import request from 'superagent'

const rootURL = '/api/v1'

export async function getWeather() {
  const response = await request.get(`${rootURL}/weather`)
  return response.body
}
