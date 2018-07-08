
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

    User.prototype.GetUserInfo = async function(req){
        var ret = null,
            {models} = this.sequelize;
        try{
            ret = await models.users.findOne(
                {where:
                        {id: {
                                    $eq:req.id
                        }},
                attributes:['firstName', 'lastName', 'email', 'isTeacher'],
                include:['Classes', models.studentclass]
                })

        } catch (e) {
            throw new Error(e);
        }
        return ret;
    }


    User.prototype.VerifyUserOrCreate = async function(req){
        var ret = null,
            {models} = this.sequelize;

        try{
            let [user, newUser] = await models.user.findOrBuild(
                {where:
                        {email: {
                                $eq: req.email
                            }
                        }
                });
            if(!newUser){
                user.googleToken = req.accessToken;
                ret = await user.save();
                return ret;
            }
            let domain = req.email ? req.email.split('@')[1] : "";
            if(domain.includes('rjuhsd.us')){
                user.firstName = req.firstName;
                user.lastName = req.lastName;
                user.email = req.email;
                user.googleToken = req.accessToken;
                if(!domain.includes('student')){
                    user.isTeacher = true;
                }
                ret = await user.save();
            }

        } catch(error){
            throw new Error(error);
        }

        return ret;

    }

    return User;
};