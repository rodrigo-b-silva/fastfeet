import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Recipient from '../app/models/Recipient';
import Session from '../app/models/Session';

const models = [Recipient, Session];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
