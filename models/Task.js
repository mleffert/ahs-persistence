
module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define('task', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        dueDate: {
            type:DataTypes.DATE
        },
        priority:{
            type:DataTypes.ENUM('HIGH', 'NORMAL', 'LOW')
        },
        title:{
            type:DataTypes.STRING(150)
        },
        description:{
            type:DataTypes.STRING(750)
        },
        isComplete:{
            type: DataTypes.BOOLEAN
        }
    });

    Task.associate = function(models) {
        this.belongsTo(models.assignment, {
            foreignKey:'assignmentId',
            targetKey: 'id'
        })
    }

    return Task;
};