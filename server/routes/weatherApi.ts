import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const weatherApiKey = process.env.WEATHER_API_KEY

// Get News data
router.get('/', async (req, res, next) => {
  try {
    const weather = await request.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/paris/?&unitGroup=uk&key=${weatherApiKey} `
    )
    res.json(weather.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
