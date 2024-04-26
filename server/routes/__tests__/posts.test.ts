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

describe('GET api/v1/posts/post/:id', async () => {
  it('should get one post', async () => {
    vi.mocked(postsDb.getSinglePost).mockResolvedValue(mockPosts)

    const res = await request(server).get('/api/v1/posts/post/2')

    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(postsDb.getSinglePost).mockRejectedValue(mockPosts)

    const res = await request(server).get('/api/v1/posts/post/2')

    expect(res.statusCode).toBe(500)
  })
})

describe('POST api/v1/posts/post', () => {
  it('should add a new post', async () => {
    const newPost = {
      id: 543,
      body: 'blog body',
      image: 'url',
      created_at: 324523453452,
      user_id: 20,
    }

    vi.mocked(postsDb.addPost).mockResolvedValue([543])
    const addPostSpy = vi.spyOn(postsDb, 'addPost')

    const res = await request(server).post('/api/v1/posts/post').send(newPost)

    expect(res.statusCode).toBe(200)
    expect(addPostSpy).toHaveBeenLastCalledWith(newPost)
  })
  it('should send an error message', async () => {
    const newPost = {
      id: 543,
      body: 'blog body',
      image: 'url',
      created_at: 324523453452,
      user_id: 20,
    }
    vi.mocked(postsDb.addPost).mockRejectedValue(newPost)

    const res = await request(server).post('/api/v1/posts/post').send(newPost)

    expect(res.statusCode).toBe(500)
  })
})
