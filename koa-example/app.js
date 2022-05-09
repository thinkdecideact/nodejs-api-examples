var Koa = require('koa')
var bodyParser = require('koa-body')

var app = new Koa()

app.use(bodyParser({
    json: true,
    multipart: true,
    urlencoded: true,
}))

var storeRouter = require('./src/modules/store/store.router')
app.use(storeRouter.routes())

app.listen(8080)