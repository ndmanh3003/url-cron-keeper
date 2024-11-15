require('dotenv').config()
const express = require('express')
const cron = require('./cron')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

cron()

const port = parseInt(process.env.PORT || '4000', 10)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
