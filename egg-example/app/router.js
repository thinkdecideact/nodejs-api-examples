// app/router.js
module.exports = (app) => {
    const { router, controller } = app

    // can handle application/x-www-form-urlencoded and application/json, but cannot handle form-data
    router.get('/api/store/getList', controller.store.getList)
    router.get('/api/store/getDetail', controller.store.getDetail)
    router.post('/api/store/create', controller.store.create)
    router.post('/api/store/delete', controller.store.delete)
    router.post('/api/store/update', controller.store.update)

    router.get('/', controller.home.index)
}