import express from 'express'
import * as db from '../db/functions/users.ts'
const router = express.Router()

// GET /api/v1/posts
router.get('/', (req, res) => {
  res.status(200).send('Hello from the users route!')
})

// GET /api/v1/users/profiles/:name
router.get('/profiles/:name', async (req, res) => {
  try {
    const username = req.params.name
    const profiles = await db.getProfileByUsername(username)
    // if (profiles.length === id + 1) {
    //   res.status(404).send('This user does not exist!')
    // }
    res.json(profiles)
    return
  } catch (error) {
    console.error('error lol')
    res.sendStatus(500)
  }
})

export default router
