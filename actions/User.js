const models = require('../models'),
    moment = require('moment'),
    _ = require('lodash');

module.exports.VerifyUserOrCreate = async req =>{
    var ret = null;

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