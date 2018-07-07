
module.exports = function(sequelize, DataTypes) {
    const StudentClass = sequelize.define('studentclass', {
        id: {
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
        color: {
            type:DataTypes.STRING(10)
        }


    }, {
        freezeTableName:true
    });

    StudentClass.associate = function(models) {
        this.belongsTo( models.class, {
            foreignKey: 'classId',
            targetKey: 'id'
        });
        this.belongsTo(models.user, {
            foreignKey: 'userId',
            targetKey: 'id'
        });
        this.hasMany(models.assignment, {
            foreignKey:'studentClassId'
        })
    }

    return StudentClass;
};