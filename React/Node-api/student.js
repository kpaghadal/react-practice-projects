const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/details', (req, res) => {
  res.send('kris paghadal, b.tech, 23soeit11011')
})
// define the about route
router.get('/uni', (req, res) => {
  res.send('rku')
})

module.exports = router
