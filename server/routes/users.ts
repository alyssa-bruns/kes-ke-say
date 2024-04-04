import express from 'express'
import * as db from '../db/functions/users'
const router = express.Router()

// GET /api/v1/users/profiles/:name
router.get('/profiles/:name', async (req, res) => {
  try {
    const username = req.params.name
    const currentUser = await db.getProfileByUsername(username)
    res.status(200).json(currentUser)
  } catch (error) {
    console.error('error lol', error)
    res.sendStatus(500)
  }
})

export default router
