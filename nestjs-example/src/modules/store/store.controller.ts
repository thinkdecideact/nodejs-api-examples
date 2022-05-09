import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreDTO } from './store.dto';
import { R } from '../../utils/R.util';

@Controller('api/store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get('/getList')
  // async getList(@Param() data: Object) {
  // async getList(@Query() data: Object) {
  async getList(@Query('pageIndex') pageIndex: number, @Query('rowCountPerPage') rowCountPerPage: number) {
    if (!pageIndex) {
      pageIndex = 0
    }
    if (!rowCountPerPage) {
      rowCountPerPage = 5
    }
    const stores =  await this.storeService.getManyByPage(pageIndex, rowCountPerPage);
    return R.success(R.SUCCESS_MSG, stores)
  }

  @Get('/getDetail')
  async getDetail(@Query('id') id: number) {
    if (!id || id < 0) {
      return R.failure("Invalid id")
    }
    const store =  await this.storeService.getOne(id)
    return R.success(R.SUCCESS_MSG, store)
  }

  @Post('/create')
  async create(@Body() data: StoreDTO) {
    data.ctime = new Date()
    data.mtime = new Date()
    const createdId = await this.storeService.create(data)
    return createdId && createdId > 0 ? R.success("新增成功", { createdId }) : R.failure("新增失败", { createdId })
  }

  @Post('/delete')
  async delete(@Body('id') id: number) {
    if (!id || id < 0) {
      return R.failure("Invalid id")
    }
    var existedStore = await this.storeService.getOne(id)
    if (!existedStore) {
      return R.failure("Failed to find data")
    }
    const affectedRows = await this.storeService.delete(id)
    return affectedRows > 0 ? R.success("Deleted successfully", { affectedRows }) : R.failure("Failed to delete", { affectedRows })
  }

  @Post('/update')
  // async update(@Body() data: Partial<StoreDTO>) {
  async update(@Body() data: Object) {
    data['id'] = Number(data['id'])
    if (!data['id'] || data['id'] < 0 || !data['name'] || !data['address']) {
      return R.failure("Invalid parameters")
    }
    var existedStore = await this.storeService.getOne(data['id'])
    if (!existedStore) {
      return R.failure("Failed to find data")
    }
    // solution 1
    // existedStore.name = data['name']
    // existedStore.address = data['address']
    // await this.storeService.save(existedStore)

    // solution 2
    var updateData = {
      name: data['name'],
      address: data['address'],
      mtime: new Date()
    } 
    var affectedRows = await this.storeService.update(data['id'], updateData)
    return affectedRows > 0 ? R.success("Updated successfully", { affectedRows }) : R.failure("Failed to update", { affectedRows })
  }
}