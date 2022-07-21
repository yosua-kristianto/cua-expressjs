import { Controller } from './Controller.js';
import express from 'express';
import { BaseResponse } from '../../model/dto/BaseResponse.js';
import ExampleValidation from '../../common/validation/ExampleValidation.js';
import AdditionParamsRequestValidation from "../../common/validation/example/AdditionParamsRequestValidation.js";
import ExampleAgeInputRequestValidation from "../../common/validation/example/ExampleAgeInputRequestValidation.js";
import {ExampleControllerHandler} from "../../handler/ExampleControllerHandler.js";

const app = express.Router();

class ExampleController extends Controller {

  routes = () => {

    /**
     * exampleRest
     * 
     * This API will return every request that sent to body.
     * 
     * /api/example
     * 
     * @param request 
     * @param response 
     * @returns 
     */
    app.get("/example", (request, response) => BaseResponse.ok(request.body, "Success", response));

    /**
     * exampleValidatedRest
     * This API will return every request that sent to body, with constraint of validation provided. 
     * @see ExampleValidation
     */
    app.post("/example", ExampleValidation, (request, response) => {
      super.requestValidator(request);

      return BaseResponse.ok(request.body, "Success", response);
    });

    /**
     * exampleHandlerUsage
     * This API will give you an example of using handler.
     */
    app.post("/addition", AdditionParamsRequestValidation, (request, response) => {
      super.requestValidator(request);

      return BaseResponse.ok(
        (new ExampleControllerHandler().addition(request.body.param_1, request.body.param_2)),
        "Success",
        response
      );
    });

    app.post("/exception-handling-test", ExampleAgeInputRequestValidation, (request, response) => {
      super.requestValidator(request);

      return BaseResponse.ok(
        (new ExampleControllerHandler().ageValidation(request.body.age)),
        "Success",
        response
      );
    });

    return app;
  }

}

export default new ExampleController().routes();
