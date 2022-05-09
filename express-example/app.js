var express = require('express')
var app = express()
const port = 8080

// Handle application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// Handle application/json
app.use(express.json())

// Handle multipart/form-data
const multer  = require('multer')
const upload = multer()
app.use(upload.array())

var storeRouter = require('./src/modules/store/store.router')
app.use('/api/store', storeRouter)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})