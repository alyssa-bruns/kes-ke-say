import { it, expect, describe, vi, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import * as newsApi from '../../routes/api.ts'
import server from '../../server.ts'
import express from 'express'
import apiRoutes from '../api.ts'
import nock from 'nock'

// nock.disableNetConnect()
const mockNews = {
  articles: [
    { id: 1, author: 'someone', title: 'test' },
    { id: 2, author: 'someone 2', title: 'test 2' },
  ],
}

describe('GET news api', () => {
  it('should list news articles', async () => {
    const scope = nock('https://newsapi.org')
      .get(
        `/v2/top-headlines?country=fr&apiKey=${import.meta.env.NEWS_API_KEY}`
      )
      .matchHeader('user-agent', 'news in france')
      .reply(200, mockNews)

    const res = await request(server).get('/api/v1/external')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(mockNews)
    expect(scope.isDone()).toBe(true)
  })
  it('should receive a 500 status', async () => {
    const scope = nock('https://newsapi.org')
      .get(
        `/v2/top-headlines?country=fr&apiKey=${import.meta.env.NEWS_API_KEY}`
      )
      .matchHeader('user-agent', 'news in france')
      .reply(500)

    const res = await request(server).get('/api/v1/external')

    expect(res.statusCode).toBe(500)
    expect(scope.isDone()).toBe(true)
  })
})
