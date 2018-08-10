'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Classes', 'googleClassroomId', {type: Sequelize.STRING})
  },

  down: (queryInterface, Sequelize) => {
      return  queryInterface.removeColumn('Classes', 'googleClassroomId');

  }
};
