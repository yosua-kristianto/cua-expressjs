import { ErrorHandler } from "../../config/Exception.js";

export default class RequestValidationException extends ErrorHandler {

  /**
   * constructor
   * @param {Array<ValidationError>} errorMessage 
   */
  constructor(errorMessage) {
    super(
      "400",
      `Bad Request - ${(errorMessage[0].msg)}`,
      errorMessage
    );
  }
};