const models = require('../models'),
    moment = require('moment'),
    _ = require('lodash');

module.exports.VerifyUserOrCreate = async req =>{
    var ret = null;

    try{
        let doesUserExist = await models.user.findOrBuild(
            {where:
                    {email: {
                            $eq: req.email
                        }
                    }
            });
        if(doesUserExist.email === req.email){
            doesUserExist.googleToken = req.accessToken;
            ret = await doesUserExist.save();
            return ret;
        }
        let domain = req.email.split('@')[1];
        if(domain.includes('rjuhsd.us')){
            doesUserExist.firstName = req.firstName;
            doesUserExist.lastName = req.lastName;
            doesUserExist.email = req.email;
            doesUserExist.googleToken = req.accessToken;
            if(!domain.includes('student')){
                doesUserExist.isTeacher = true;
            }
            ret = await doesUserExist.save();
        }

    } catch(error){
        throw new Error(error);
    }

    return ret;

}