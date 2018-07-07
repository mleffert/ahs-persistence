'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.addColumn('Tasks', 'title', {type:Sequelize.STRING(150)}),
        queryInterface.addColumn('Assignments', 'title', {type:Sequelize.STRING(150)}),
        queryInterface.addColumn('Assignments', 'description', {type:Sequelize.STRING(750)}),
        queryInterface.addColumn('Classes', 'name', {type:Sequelize.STRING(150)})


    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.removeColumn('Tasks', 'title'),
          queryInterface.removeColumn('Assignments', 'title'),
          queryInterface.removeColumn('Assignments', 'description'),
          queryInterface.removeColumn('Classes', 'name')
      ])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
