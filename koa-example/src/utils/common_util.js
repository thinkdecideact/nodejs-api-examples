function getPageCount(rowCount, rowCountPerPage) {
    if (rowCount % rowCountPerPage == 0) {
        return rowCount/rowCountPerPage;
    }
    return Math.ceil(rowCount/rowCountPerPage)
}

module.exports = {
    getPageCount
}