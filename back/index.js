const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cors())

app = require('./controllers/purchaseRoutes')(server);

server.listen(3000)
