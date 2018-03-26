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

router.post('/api/parse', async (req, res, next) => {
  const writable = fs.createWriteStream('output/post.not_converted_to_json')

  if (req.busboy) {
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      // This his how far I got 1 hour and 55 minutes into the test.
      // I'm stopping now to git commit, update the README, and submit.
      // The next step is to pipe the input file, not directly to a file as is done below, but through the ETL function first (processData() in etl.js)
      // Here, due to running out of time, I am just writing the original cms_sample.txt data recieved from the input form, into a file called post.not_converted_to_json

      file.pipe(writable)
      res.redirect(301, 'http://localhost:4000')
    });
    req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
      // Do something
    });
  }
})

module.exports = router
