import { it, expect, describe } from 'vitest'
import request from 'supertest'
import server from '../../server.ts'
import nock from 'nock'

const mockWeather = {temp: 12.6, place: 'Paris'}

describe('GET weather api', () => {
  it('should show the weather in paris', async () => {
    const scope = nock()
  })
})