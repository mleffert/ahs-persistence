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
        },
        isActive:{
            type:DataTypes.BOOLEAN
        },
        googleClassroomId:{
            type:DataTypes.STRING
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


    Class.updateOrCreateClass = async function(currentClasses, googleClasses, _) {
        let updateClasses = [],
            {models} = this.sequelize;
        for(var gClass of googleClasses){
            let classexists = _.find(currentClasses, ['googleClassroomId', gClass.id])
            if(classexists && gClass.courseState !== "ACTIVE"){
                classexists.isActive = false;
                await classexists.save();
            } else if(!classexists){
                let newClass = models.class.build();
                newClass.className = gClass.name;
                newClass.googleClassroomId = gClass.id;
                newClass.isActive = true;
                await newClass.save();
            }
        }
        return

    }

    return Class;
};