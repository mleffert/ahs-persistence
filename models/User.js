
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('user', {
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
        firstName:{
            type: DataTypes.STRING(75)
        },
        lastName:{
            type: DataTypes.STRING(75)
        },
        email:{
            type: DataTypes.STRING(150)
        },
        googleToken:{
            type: DataTypes.STRING(300)
        },
        isTeacher:{
        type: DataTypes.BOOLEAN
    }


    });

    User.associate = function(models) {
        this.hasMany( models.class, {
            as: 'Teacher',
            foreignKey: 'teacherId'
        });
        this.belongsToMany(models.class, {
            as: 'Classes',
            through:'studentclass',
            foreignKey: 'userId'
        });
        this.hasMany(models.studentclass, {
            foreignKey:'userId'
        })
    }

    return User;
};