import express from 'express'
import * as db from '../db/functions/groups'

const router = express.Router()

// GET /api/v1/groups
router.get('/', async (req, res) => {
  try {
    const groups = await db.getAllGroups()
    res.json(groups)
    res.status(200)
  } catch (error) {
    res.status(500).json([error])
  }
})

export default router
