const express = require('express')
const router = express.Router() // eslint-disable-line

router.get('/', (req, res) => {
  res.render('slow')
})

router.get('/medium', (req, res) => {
  res.render('medium')
})

router.get('/fast', (req, res) => {
  res.render('fast')
})

module.exports = router