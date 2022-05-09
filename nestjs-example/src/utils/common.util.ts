export class CommonUtil {
  static getPageCount(rowCount: number, rowCountPerPage: number): number {
    if (rowCount % rowCountPerPage == 0) {
      return rowCount/rowCountPerPage;
    }
    return Math.ceil(rowCount/rowCountPerPage)
  }
}