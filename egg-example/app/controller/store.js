// app/controller/store.js
const Controller = require('egg').Controller
const Store = require('../models/store')
const { success, failure, SUCCESS_MSG } = require('../utils/api_util')
const CommonUtil = require('../utils/common_util') 

class StoreController extends Controller {
    async getList() {
        const { ctx } = this
        var req = ctx.request
        var rowCountPerPage = Number(req.query.rowCountPerPage)
        var pageIndex = Number(req.query.pageIndex)
        if (isNaN(rowCountPerPage) || isNaN(pageIndex)) {
            return failure(res, "Invalid parameters")
        }
        if (pageIndex < 0) {
            pageIndex = 0
        }
        if (rowCountPerPage < 0) {
            rowCountPerPage = 5
        }
        
        var startIndex = pageIndex * rowCountPerPage
        
        var stores = await Store.findAll({
            attributes: ['id', 'name', 'address', 'is_active', 'ctime', 'mtime'],
            where: {
                is_del: 0,
                is_active: 1
            },
            limit: rowCountPerPage,
            offset: startIndex,
            order: [['mtime', 'DESC'], ['id', 'DESC']],
        })
        
        const rowCount = await Store.count({
            where: {
                is_del: 0,
                is_active: 1
            },
        })
        return success(ctx, SUCCESS_MSG, {
            startIndex: startIndex,
            pageIndex: pageIndex,
            pageCount: CommonUtil.getPageCount(rowCount, rowCountPerPage),
            rowCount: rowCount,
            rowCountPerPage: rowCountPerPage,
            rows: stores
        })
    }

    async getDetail() {
        const { ctx } = this
        var req = ctx.request
        var id = Number(req.query.id)
        if (!id) {
            return failure(ctx, 'Invalid id')
            
        }
        var store = await Store.findOne({
            attributes: ['id', 'name', 'address', 'is_active', 'ctime', 'mtime'],
            where: {
                id: id,
                is_del: 0,
                is_active: 1
            },
        })
        return success(ctx, SUCCESS_MSG, store)
    }

    async create() {
        const { ctx } = this
        var req = ctx.request
        var name = req.body.name
        var address = req.body.address
        if(!name || !address) {
            return failure(ctx, 'Invalid parameters')
        }
        const store = await Store.create({
            name: name,
            address: address,
            ctime: Date.now(),
            mtime: Date.now(),
        })
        return !store.id ?  failure(ctx, 'Failure') : success(ctx, 'Success', {id: store.id})
    }

    async delete() {
        const { ctx } = this
        var req = ctx.request
        var id = Number(req.body.id)
        if (!id || id < 0) {
            return failure(ctx, 'Invalid id')
        }
        var affectedRows = await Store.destroy( {
            where: {
                id: id,
                is_del: 0,
                is_active: 1
            }
        })
        return affectedRows > 0? success(ctx, 'Success') : failure(ctx, 'Failure')
    }

    async update() {
        const { ctx } = this
        var req = ctx.request
        var id = Number(req.body.id)
        var name = req.body.name
        var address = req.body.address
        if(!name || !address) {
            return failure(ctx, 'Invalid parameters')
        }
        if (!id || id < 0) {
            return failure(ctx, 'Invalid id')
        }
        var affectedRows = await Store.update({
            name: name,
            address: address,
            mtime: Date.now(),
        }, {
            where: {
                id: id,
                is_del: 0,
                is_active: 1
            }
        })
        return affectedRows > 0? success(ctx, 'Success') : failure(ctx, 'Failure')
    }
}

module.exports = StoreController;