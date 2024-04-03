import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const newsApiKey = process.env.NEWS_API_KEY

// Get News data
router.get('/', async (req, res, next) => {
  try {
    const news = await request.get(
      `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${newsApiKey}`
    )
    res.json(news.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
