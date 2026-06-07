import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker API')
})

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
  })
  .catch((err) => {
    console.error('MongoDB connection error', err)
    process.exit(1)
  })
