'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'recipients', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      },
      deliveryman_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'deliverymans', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      },
      signature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false
      },
      canceled_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('orders');
  }
};
