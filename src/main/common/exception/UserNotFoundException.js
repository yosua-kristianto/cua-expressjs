import { ErrorHandler } from '../../config/Exception.js';

export class UserNotFoundException extends ErrorHandler {

  constructor(){
    super(
        "409",
        "User with requested id not found"
    );
  }

}