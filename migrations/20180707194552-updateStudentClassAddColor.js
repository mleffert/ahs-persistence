'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("StudentClass", "color", {type:Sequelize.STRING(10)})

      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("StudentClass", "color")

      /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.dropTable('users');
      */
  }
};
