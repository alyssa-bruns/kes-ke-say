import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as postsDb from '../../db/functions/posts'
import server from '../../server'

vi.mock('../../db/functions/posts')

const mockPosts = [
  {
    postId: 1,
    userId: 99,
    body: 'Hello',
    image: 'url',
    createdAt: 2342342342,
    username: 'Joel',
  },
  {
    postId: 2,
    userId: 43,
    body: 'Bye',
    image: 'url',
    createdAt: 23423423,
    username: 'Alyssa',
  },
]

describe('GET api/v1/posts', async () => {
  it('should get all posts', async () => {
    vi.mocked(postsDb.getAllPosts).mockResolvedValue(mockPosts)

    const res = await request(server).get('/api/v1/posts')

    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(postsDb.getAllPosts).mockRejectedValue(mockPosts)

    const res = await request(server).get('/api/v1/posts')

    expect(res.statusCode).toBe(500)
  })
})
