import { Request, Response } from "express"
import { R } from '../../utils/R.util'
import { StoreService } from './store.service'

export class StoreController {

  async getList(req: Request, res: Response) {
    var storeService = new StoreService(req.app.locals.myDataSource)

    var rowCountPerPage = Number(req.query.rowCountPerPage)
    var pageIndex = Number(req.query.pageIndex)
    if (isNaN(rowCountPerPage) || isNaN(pageIndex)) {
      return R.failure(res, "Invalid parameters")
    }
    const stores =  await storeService.getManyByPage(pageIndex, rowCountPerPage);
    return R.success(res, R.SUCCESS_MSG, stores)
  }

  async getDetail(req: Request, res: Response) {
    var storeService = new StoreService(req.app.locals.myDataSource)

    var id = Number(req.query.id)
    if (!id || id <0) {
      return R.failure(res, 'Invalid id')
    }
    const store =  await storeService.getOne(id)
    return R.success(res, R.SUCCESS_MSG, store)
  }

  async create(req: Request, res: Response) {
    var storeService = new StoreService(req.app.locals.myDataSource)

    var name = req.body.name
    var address = req.body.address
    if(!name || !address) {
        return R.failure(res, 'Invalid parameters')
    }
    var data = {
      name: name,
      address: address,
      ctime: new Date(),
      mtime: new Date(),
    }
    // data.ctime = new Date()
    // data.mtime = new Date()
    const createdId = await storeService.create(data)
    return createdId && createdId > 0 ? R.success(res, "Success", { createdId }) : R.failure(res, "Failure", { createdId })
  }

  async delete(req: Request, res: Response) {
    var storeService = new StoreService(req.app.locals.myDataSource)

    var id = Number(req.body.id)
    if (!id || id < 0) {
        return R.failure(res, 'Invalid id')
    }
    var existedStore = await storeService.getOne(id)
    if (!existedStore) {
      return R.failure(res, "Failed to find data")
    }
    const affectedRows = await storeService.delete(id)
    return affectedRows > 0 ? R.success(res, "Success", { affectedRows }) : R.failure(res, "Failure", { affectedRows })
  }

  async update(req: Request, res: Response) {
    var storeService = new StoreService(req.app.locals.myDataSource)

    var id = Number(req.body.id)
    var name = req.body.name
    var address = req.body.address
    if(!name || !address) {
      return R.failure(res, "Invalid parameters")
    }
    if (!id || id < 0) {
      return R.failure(res, "Invalid id")
    }
    var existedStore = await storeService.getOne(id)
    if (!existedStore) {
      return R.failure(res, "Failed to find data")
    }
    // Solution 1
    // existedStore.name = data['name']
    // existedStore.address = data['address']
    // await storeService.save(existedStore)

    // Solution 2
    var updateData = {
      name: name,
      address: address,
      mtime: new Date(),
    } 
    var affectedRows = await storeService.update(id, updateData)
    return affectedRows > 0 ? R.success(res, "Success", { affectedRows }) : R.failure(res, "Failure", { affectedRows })
  }
}