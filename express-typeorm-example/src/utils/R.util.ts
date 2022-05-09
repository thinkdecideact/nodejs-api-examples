import { Response } from "express"

export class R {
  static readonly SUCCESS_CODE: number = 0
  static readonly SUCCESS_MSG: string = "Success"
  static readonly FAILURE_CODE: number = 1
  static readonly FAILURE_MSG: string = "Failure"
  static readonly TOKEN_INVALID_CODE: number = -1
  static readonly TOKEN_INVALID_MSG: string = "Token expired, login required"

  static result(res: Response, code: number, msg: string, data: any) {
    return res.send({
      code,
      msg,
      data
    })
  }

  static success(res: Response, msg: string = "Success", data?: any) {
    return R.result(res, R.SUCCESS_CODE, msg, data)
  }

  static failure(res: Response, msg: string = "Failure", data?: any) {
    return R.result(res, R.FAILURE_CODE, msg, data)
  }
}