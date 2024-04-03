import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as newsApi from '../../routes/api.ts'
import server from '../../server.ts'
import express from 'express'
import apiRoutes from '../api.ts'

// import server from './server'

// describe('/compliment', () => {
//   it('should have a compliment', async () => {
//     //Act
//     const res = await request(server).get('/compliment')

//     //Assert
//     expect(res.statusCode).toBe(200)
//     expect(res.body.text).toBe('What a fancy blazer~')
//   })
//   it('should be 404 when wrong route', async () => {
//     const res = await request(server).get('/wrongurl')
//     expect(res.statusCode).toBe(404)
//   })
// })

// describe('/secrets', () => {
//   it('should send mystical secrets when query is mystical', async () => {
//     //Act
//     const res = await request(server).get('/secrets?type=mystical')

//     //Assert
//     expect(res.statusCode).toBe(200)
//     expect(res.body).toStrictEqual(['so mystical'])
//   })
// })

vi.mock('../../routes/api.ts')

const mockNews = {
  articles: [
    { id: 1, author: 'someone', title: 'test' },
    { id: 2, author: 'someone 2', title: 'test 2' },
  ],
}

describe('api.ts route', () => {
  it('should display news', async () => {
    // // vi.mocked(newsApi).mockResolvedValue(mockNews)
    // // Act
    // const res = await request(server).get('/external')

    // // Assert
    // expect(res.statusCode).toBe(200)
    // expect(res.body).toBeCalled()
    // Mock superagent
    vi.mock('superagent', () => ({
      get: vi.fn().mockResolvedValue({
        body: mockNews, // Assuming `mockNews` is your mock data
      }),
      set: vi.fn().mockReturnThis(), // Chainable method
    }))

    // Create an express application for testing
    const app = express()
    app.use('/api/v1/external', apiRoutes)
  })
  describe('GET /api/v1/external', () => {
    it('should display news', async () => {
      // Act
      const response = await request(app).get('/api/v1/external')

      // Assert
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual(mockNews) // Ensure the response matches the mock data
    })
  })
})
