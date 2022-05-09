import { DataSource } from "typeorm"
import { Repository } from 'typeorm'
import { StoreEntity } from "./store.entity"
import { CommonUtil } from '../../utils/common.util'

export class StoreService {
  private storeRepository: Repository<StoreEntity>

  constructor(myDataSource: DataSource) {
    this.storeRepository = myDataSource.getRepository(StoreEntity)
  }

  async getAll() {
    return await this.storeRepository.find()
  }


  async getManyByPage(pageIndex: number=0, rowCountPerPage: number) {
    var startIndex = pageIndex * rowCountPerPage
    
    var condition = {
      isActive: 1,
      isDel: 0,
    }
    
    var rows = await this.storeRepository.find({
      select: {
        id: true,
        name: true,
        address: true,
        ctime: true,
        mtime: true,
      },
      where: condition,
      skip: startIndex,
      take: rowCountPerPage,
      order: {
        ctime: 'DESC',
        id: 'DESC',
      },
    })
    
    var rowCount = await this.getRowCount(condition)
    
    var pageCount = CommonUtil.getPageCount(rowCount, rowCountPerPage)
    return {
      startIndex,
      pageIndex,
      pageCount,
      rowCount,
      rowCountPerPage,
      rows
    }
  }

  async getRowCount(condition: object) {
    return this.storeRepository.count({where: condition})
  }

  async getOne(id: number) {
    return await this.storeRepository.findOne({ where: { id } })
  }

  async getOneByName(name: string): Promise<Object> {
    return await this.storeRepository.findOne({
      where: {
        name: name,
      },
    })
  }

  async create(data: Object) {
    const pendingStore = this.storeRepository.create(data)
    var createdStore = await this.storeRepository.save(pendingStore)
    // return createdStore
    return createdStore.id
  }

  async delete(id: number) {
    var deleteResult = await this.storeRepository.delete({ id })
    return deleteResult.affected
  }

  async update(id: number, data: Object) {
    var updateResult = await this.storeRepository.update({ id }, data)
    return updateResult.affected
  }

  async save(store: StoreEntity) {
    await this.storeRepository.save(store)
  }
}