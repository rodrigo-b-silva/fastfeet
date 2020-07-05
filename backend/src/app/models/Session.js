import Sequelize, { Model } from 'sequelize';

class Session extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      { sequelize }
    );
  }
}

export default Session;
