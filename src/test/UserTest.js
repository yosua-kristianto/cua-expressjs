import {ExampleControllerHandler} from "../main/handler/ExampleControllerHandler.js";
import UserRepositoryImpl from "../main/repository/impl/UserRepositoryImpl.js";
import {handleTestResult} from "./support/CallbackTemplate.js";

async function main() {
  const exampleHandler = new ExampleControllerHandler();

  // Run test to create User
  await UserRepositoryImpl.createUser({
    "email": 'test@gmail.com',
    "phone": '012345678'
  }).then(handleTestResult)
    .catch(handleTestResult);
}

export default main();