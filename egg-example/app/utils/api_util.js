const SUCCESS_CODE = 0
const SUCCESS_MSG = "Success"

const FAILURE_CODE = 1
const FAILURE_MSG = "Failure"

const TOKEN_INVALID_CODE = -1
const TOKEN_INVALID_MSG = "Token expired, login required"

function result(ctx, c, m, d) {
    ctx.body = { code: c,  msg: m, data: d }
    return
}

function success(ctx, m='Success', d='') {
    return result(ctx, SUCCESS_CODE, m, d)
}

function failure(ctx, m='Failure', d='') {
    return result(ctx, FAILURE_CODE, m, d)
}

module.exports = {
    success,
    failure,
    SUCCESS_CODE,
    SUCCESS_MSG,
    FAILURE_CODE,
    FAILURE_MSG
}