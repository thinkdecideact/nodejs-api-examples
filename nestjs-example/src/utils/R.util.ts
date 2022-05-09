export class R {
  static readonly SUCCESS_CODE: number = 0
  static readonly SUCCESS_MSG: string = "Success"
  static readonly FAILURE_CODE: number = 1
  static readonly FAILURE_MSG: string = "Failure"
  static readonly TOKEN_INVALID_CODE: number = -1
  static readonly TOKEN_INVALID_MSG: string = "token expired, login required"

  static result(code: number, msg: string, data: any) {
    return {
      code,
      msg,
      data
    }
  }

  static success(msg: string = "Success", data?: any) {
    return R.result(R.SUCCESS_CODE, msg, data)
  }

  static failure(msg: string = "Failure", data?: any) {
    return R.result(R.FAILURE_CODE, msg, data)
  }
}