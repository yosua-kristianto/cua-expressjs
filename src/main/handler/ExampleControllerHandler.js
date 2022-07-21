import {ExampleAgeBelowEightTeenException} from "../common/exception/example/ExampleAgeBelowEightTeenException.js";

export class ExampleControllerHandler {

  /**
   * addition
   * 
   * This handler handle addition by returning firstParam + secondParam
   * 
   * @param {number} firstParam 
   * @param {number} secondParam 
   * @returns {number}
   */
  addition = (firstParam, secondParam) => firstParam + secondParam;

  /**
   * ageValidation
   * 
   * This handler will return true if age is higher than 18
   * 
   * @param {number} age 
   * @returns {true}
   */
  ageValidation = (age) => {
    if (age < 18) {
      throw new ExampleAgeBelowEightTeenException();
    }

    return true;
  }
}