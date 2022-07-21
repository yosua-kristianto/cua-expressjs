export class BaseResponse {

  /**
   * ok
   * 
   * A static function that return BaseResponse as successful response.
   * @param {any} data 
   * @param {string} message 
   * @param {Response} res 
   * @param {string} code 
   * @returns {Response}
   */
  static ok(data, message, res, code = "200") {
    const baseResponse = new BaseResponse();

    baseResponse.status = true;
    baseResponse.code = code;
    baseResponse.message = message;
    baseResponse.data = data || null;

    return res
            .status(200)
              .json((
                baseResponse
              ));
  }

  /**
   * 
   *  A static function that return BaseResponse as not okay response.
   *  Oftenly used for Internal Server Error.
   */

  /**
   * error
   * 
   * A static function that return BaseResponse as not okay response.
   * Oftenly used for Internal Server Error.
   * @param {string} message 
   * @param {Response} res 
   * @param {string} code 
   * @param {any | null} data 
   * @returns {Response}
   */
  static error(message, res, code = "500", data) {
    const baseResponse = new BaseResponse();

    baseResponse.status = false;
    baseResponse.code = code;
    baseResponse.message = message;
    baseResponse.data = data || null;

    if (process.env.APP_DEBUG == "true") {
      console.log(res);
    }

    return res
            .status(500)
              .json((
                baseResponse
              ));
  }

  /**
   * custom
   *
   * A static function that return BaseResponse for custom purpose.
   *
   * @param {string} message 
   * @param {Response} res 
   * @param {string} code 
   * @param {any | null} data 
   * @returns {Response}
   */
  static custom(status, code, message, data) {
    const baseResponse = new BaseResponse();

    baseResponse.status = status;
    baseResponse.code = code;
    baseResponse.message = message;
    baseResponse.data = data;

    return baseResponse;
  }
}
