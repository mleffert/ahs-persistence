
module.exports = function(sequelize, DataTypes) {
    const Assignment = sequelize.define('assignment', {
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
        type:{
            type:DataTypes.ENUM('STUDYING', 'HOMEWORK', 'PROJECT')
        },
        title:{
            type:DataTypes.STRING(150)
        },
        description:{
            type:DataTypes.STRING(750)
        }
    });

    Assignment.associate = function(models) {
        this.hasMany( models.task, {
            foreignKey: 'assignmentId',
            targetKey: 'id'
        });

        this.belongsTo(models.studentclass, {
            foreignKey:'studentClassId',
            targetKey: 'id'
        })
    }

    return Assignment;
};