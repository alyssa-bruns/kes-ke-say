import express from 'express'
import * as db from '../db/functions/posts'

const router = express.Router()

// GET /api/v1/posts
router.get('/', async (req, res) => {
  try {
    const posts = await db.getAllPosts()
    res.json(posts)
  } catch (error) {
    res.sendStatus(500)
  }
})

// GET /api/v1/posts/post/:id
router.get('/post/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = await db.getSinglePost(id)
    res.json(post)
  } catch (error) {
    res.sendStatus(500)
  }
})

// POST /api/v1/posts/post
router.post('/post', async (req, res) => {
  try {
    const newPost = req.body
    await db.addPost(newPost)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
