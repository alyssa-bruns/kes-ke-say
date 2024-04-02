import request from 'superagent'

const rootURL = '/api/v1'

export async function getNews() {
  console.log('hello from api client')
  const response = await request.get(`${rootURL}/external`)
  console.log(response.body)
  return response.body
}
