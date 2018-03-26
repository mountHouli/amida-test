const fs = require('fs')
const path = require('path')

const express = require('express')

const router = express.Router()

const filename = path.resolve(__dirname, '..', 'example/sample.json')

router.get('/api/sample', async (req, res, next) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    const response = {
      data: JSON.parse(data),
      metadata: {
        generated: Date.now()
      }
    }

    res.json(response)
  })
})

module.exports = router
