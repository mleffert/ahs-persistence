'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.addColumn('Assignments', 'studentClassId', {
          type:Sequelize.INTEGER,
          references:{
            model:'StudentClass',
            key: 'id'
          }
        }),
        queryInterface.addColumn('Tasks', 'assignmentId', {
            type:Sequelize.INTEGER,
            references:{
                model:'Assignments',
                key: 'id'
            }
        })
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
        queryInterface.removeColumn('Tasks', 'assignmentId'),
        queryInterface.removeColumn('Assignments', 'studentClassId')
    ])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
