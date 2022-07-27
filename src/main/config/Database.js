import { Sequelize } from 'sequelize';
import config from './Config.js';
import { Log } from './Logging.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from "fs";

const NAMESPACE = "DATABASE";

/**
 * Authenticate the database.
 */
const mainConnection = () => {
  let sequelize = new Sequelize(
    config.database.main.database,
    config.database.main.username,
    config.database.main.password,
    {
      "host"        : config.database.main.uri,
      "dialect"     : config.database.main.dialect,
      "port"        : config.database.main.port,
      // "logging"     : (... msg) => console.log(msg),
      // "logging"     : false,
    }
  );

    // Authenticate Database
  sequelize
    .authenticate()
    .then(async () => {
      Log.d(NAMESPACE, `Connection to ${config.database.main.database} has been established.`);
    })
    .catch(error => {
      Log.e(NAMESPACE, `Connection to ${config.database.main.database} cannot be established: ${error}`);
    });

  return sequelize;
}

export default mainConnection();

