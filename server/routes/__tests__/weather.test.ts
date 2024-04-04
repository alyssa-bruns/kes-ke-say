import { it, expect, describe } from 'vitest'
import request from 'supertest'
import server from '../../server.ts'
import nock from 'nock'

const mockWeather = { temp: 14.2, place: 'Paris' }

describe('GET weather api', () => {
  it('should show Paris weather', async () => {
    const scope = nock('https://weather.visualcrossing.com')
      .get(
        `/VisualCrossingWebServices/rest/services/timeline/paris/?&unitGroup=uk&key=${
          import.meta.env.WEATHER_API_KEY
        }`
      )
      .reply(200, mockWeather)

    const res = await request(server).get('/api/v1/weather')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(mockWeather)
    expect(scope.isDone()).toBe(true)
  })
  it('should show an error message', async () => {
    const scope = nock('https://weather.visualcrossing.com')
      .get(
        `/VisualCrossingWebServices/rest/services/timeline/paris/?&unitGroup=uk&key=${
          import.meta.env.WEATHER_API_KEY
        }`
      )
      .reply(500)

    const res = await request(server).get('/api/v1/weather')

    expect(res.statusCode).toBe(500)
    expect(scope.isDone()).toBe(true)
  })
})
