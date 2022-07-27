// Make sure to put any pre-condition to make sure your application is running well in here
import '../main/config/Database.js';

/**
 * WRITING TEST
 *
 * You can specify every unit Tests in here.
 */

import * as exampleTest from './ExampleTest.js'
import * as userTest from './UserTest.js';

async function main() {

  await exampleTest;
  await userTest;
}

main().then(() => { console.log("Testing Done. Use CTRL+C or COMMAND+C to close this test run.") });