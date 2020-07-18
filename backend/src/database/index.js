import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Recipient from '../app/models/Recipient';
import Session from '../app/models/Session';
import File from '../app/models/File';
import Deliveryman from '../app/models/Deliveryman';

const models = [Recipient, Session, File, Deliveryman];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
