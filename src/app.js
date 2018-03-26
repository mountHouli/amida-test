const path = require('path')

const express = require('express')
const app = express()

var busboy = require('connect-busboy')

const config = require('./config.js')
const router = require('./router.js')
const errorHandler = require('./errorHandler.js')


app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.use(busboy({ immediate: true }))

app.use(router)

app.use(errorHandler)

app.listen(config.port, (err) => {
  if (err) {
    console.log('Error starting server:')
    console.log(err)
    process.exit(1)
  }
})
