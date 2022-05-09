const SUCCESS_CODE = 0
const SUCCESS_MSG = "操作成功"

const FAILURE_CODE = 1
const FAILURE_MSG = "操作失败"

const TOKEN_INVALID_CODE = -1
const TOKEN_INVALID_MSG = "token失效，需要重新登录"

function result(res, c, m, d) {
    res.send({ code: c,  msg: m, data: d })
    return
}

function success(res, m='操作成功', d='') {
    return result(res, SUCCESS_CODE, m, d)
}

function failure(res, m='操作失败', d='') {
    return result(res, FAILURE_CODE, m, d)
}

module.exports = {
    success,
    failure,
    SUCCESS_CODE,
    SUCCESS_MSG,
    FAILURE_CODE,
    FAILURE_MSG
}