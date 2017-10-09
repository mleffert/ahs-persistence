let Sequelize = require('sequelize'),
    name = task;


const schema = {
    TaskID: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    DueDate: {
        type: Sequelize.DATEONLY
    },
    Priority: {
        type: Sequelize.INTEGER
    }
}

function Task (sequelize, Types){
    const Task = sequelize.define( name, schema, options );
    Task.associate = function(models) {
        this.belongsTo(models.assignment, {foreignKey:'AssignmentId'});
    }
    return Task;
}

Task.name = name;
Task.schema = schema;

module.exports = Task;

