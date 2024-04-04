import * as db from '../functions/posts'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllPosts', () => {
  it('should get all posts', async () => {
    const allPosts = await db.getAllPosts()

    expect(allPosts).toHaveLength(4)
    expect(allPosts[2].postId).toBe(3)
  })
})

describe('getSinglePost', () => {
  it('should get just one post', async () => {
    const singlePost = await db.getSinglePost(2)

    expect(singlePost).toHaveLength(1)
    expect(singlePost[0].postId).toBe(2)
  })
})

describe('addPost', () => {
  it('should add a new post', async () => {
    const newPost = await db.addPost({
      id: 543,
      body: 'blog body',
      image: 'url',
      created_at: 324523453452,
      user_id: 20,
    })

    expect(newPost[0].id).toBe(543)
  })
})

afterAll(() => {
  connection.destroy()
})
