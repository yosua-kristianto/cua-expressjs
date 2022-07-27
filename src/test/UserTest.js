import {ExampleControllerHandler} from "../main/handler/ExampleControllerHandler.js";
import {handleTestResult} from "./support/CallbackTemplate.js";
import UserRepository from "../main/repository/UserRepository.js";

async function main() {
  const exampleHandler = new ExampleControllerHandler();

  // Run test to create User
  await UserRepository.createUser({
    "email": 'test@gmail.com',
    "phone": '012345678'
  }).then(handleTestResult)
    .catch(handleTestResult);
}

export default main();