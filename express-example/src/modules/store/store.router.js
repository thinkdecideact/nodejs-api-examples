var express = require('express')
var router = express.Router()
var StoreController = require('./store.controller')
var storeController = new StoreController()

// http://127.0.0.1:8080/api/store/getList?rowCountPerPage=5&pageIndex=0
router.get('/getList', storeController.getList)

// http://127.0.0.1:8080/api/store/getDetail?id=1
router.get('/getDetail', storeController.getDetail)

// http://127.0.0.1:8080/api/store/create
router.post('/create', storeController.create)

// http://127.0.0.1:8080/api/store/delete
router.post('/delete', storeController.delete)

// http://127.0.0.1:8080/api/store/update
router.post('/update', storeController.update)

module.exports = router
