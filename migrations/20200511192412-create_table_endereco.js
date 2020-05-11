'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable(
    'endereco', 
    { 
     id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
     },
     endereco: {
       type: Sequelize.STRING(60),
       allowNull: false
     },
     numero: {
       type: Sequelize.INTEGER,
       allowNull: true
     },
     complemento: Sequelize.STRING,
     cep: Sequelize.STRING(8),
     uf: Sequelize.STRING(2),
     fk_usuario: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: { model: 'usuario', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
     },     
     });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('endereco');
  }
};
