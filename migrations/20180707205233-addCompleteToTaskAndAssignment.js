'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.addColumn('Assignments', 'isComplete', {type:Sequelize.BOOLEAN}),
        queryInterface.addColumn('Tasks', 'isComplete', {type:Sequelize.BOOLEAN})

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
          queryInterface.removeColumn('Assignments', 'isComplete'),
          queryInterface.removeColumn('Tasks', 'isComplete')

      ])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
