let Sequelize = require('sequelize'),
    name = assignment;


const schema = {
    AssignmentID: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    AssignmentName: {
        type: Sequelize.STRING
    },
    AssignmentType:{
        type: Sequelize.STRING
    },
    DueDate: {
        type: Sequelize.DATEONLY
    },
    Priority: {
        type: Sequelize.INTEGER
    }
}

function Assignment (sequelize, Types){
    const Assignment = sequelize.define( name, schema, options );
    Assignment.associate = function(models) {
        //You still need to add the rest of the associations
        this.hasMany(models.task, {foreignKey:'AssignmentId'});
    }
    return Assignment;
}

Assignment.name = name;
Assignment.schema = schema;

module.exports = Assignment;