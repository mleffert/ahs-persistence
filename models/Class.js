
module.exports = function(sequelize, DataTypes) {
    const Class = sequelize.define('class', {
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
        className: {
            type:DataTypes.STRING(75)
        }
    });

    Class.associate = function(models) {
        this.belongsTo( models.user, {
            foreignKey: 'teacherId',
            targetKey: 'id'
        });
        this.belongsToMany(models.user, {
            as: 'Students',
            through:'studentclass',
            foreignKey: 'classId'
        });
        this.hasMany(models.studentclass, {
            foreignKey:'classId'
        })
    }

    return Class;
};