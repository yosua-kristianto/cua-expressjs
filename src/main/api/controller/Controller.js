import { validationResult } from "express-validator";
import RequestValidationException from "../../common/exception/RequestValidationException.js";

export class Controller {

  
  /**
   * requestValidator
   * 
   * This function is an extract method to make sure
   * that validation through request is right.
   * 
   * If it has a validation error within, throw RequestValidationException
   * 
   * @see RequestValidationException
   * 
   * @param request 
   */
  requestValidator(request) {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
      throw new RequestValidationException(
        errors.array()
      );
    }
  }

}