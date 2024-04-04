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

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const group = await db.getGroupById(id)
    res.json(group)
    res.status(200)
  } catch (error) {
    res.status(500).json([error])
  }
})

router.get('/members/:user_id', async (req, res) => {
  const user_id = Number(req.params.user_id)
  try {
    const members = await db.getGroupMembersById(user_id)
    res.json(members)
    res.status(200)
  } catch (error) {
    res.status(500).json([error])
  }
})

export default router
