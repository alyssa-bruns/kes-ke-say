import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as postsDb from '../../db/functions/posts'
import server from '../../server'

vi.mock('../../db/functions/posts')

const mockPosts = [
  { id: 1, user_id: 99, body: 'Hello', image: 'url', created_at: '3:00pm' },
  { id: 2, user_id: 43, body: 'Bye', image: 'url', created_at: '3:01pm' },
]

describe('GET api/v1/posts', async () => {
  it('should get all posts', async () => {
    vi.mocked(postsDb.getAllPosts).mockResolvedValue(mockPosts)

    const res = await request(server).get('/api/v1/posts')

    // console.log(mockPosts)

    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(postsDb.getAllPosts).mockRejectedValue(mockPosts)

    const res = await request(server).get('/api/v1/posts')

    console.log(res.statusCode)

    expect(res.statusCode).toBe(500)
  })
})
