import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from '../models';
import { successResponse, errorResponse, uniqueId } from '../helpers';
import sendRegisterEmail from "../emails/inviteEmail"

/**
 * Get login data
 * @return user logged user data
 */
 exports.login = async (req, res) => {
    try {  
      const user = await db.users.findOne({
        where: { 
          email: req.body.email,
          deleted_at: null 
        },
      });
  
      if (!user) {
        throw new Error("Email doesn't Exist");
      }
      const reqPass = crypto
        .createHash('md5')
        .update(req.body.password || '')
        .digest('hex');
      if (reqPass !== user.password) {
        throw new Error('Incorrect Email Id or Password');
      }
      const token = jwt.sign(
        {
          user: {
            userId: user.id,
            email: user.email,
            type: user.type,
            createdAt: new Date(),
          },
        },
        process.env.SECRET,
      );
      delete user.dataValues.password;
      return successResponse(req, res, { user, token });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
};

/**
 * Get All Users
 * @return users data
 */
exports.allUsers = async (req, res) => {
    try {
      const page = req.params.page || 1;
      const limit = 2;
      const users = await db.users.findAndCountAll({
        where: { 
          type: 'user',
          deleted_at: null
        },
        order: [['createdAt', 'DESC'], ['fullName', 'ASC']],
        offset: (page - 1) * limit,
        limit,
      });
      return successResponse(req, res, { users });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
}

/**
 * Get a User
 * @return user data
 */
exports.getUser = async (req, res) => {
    try {
      const users = await db.users.findOne({
        where: { 
          id: req.params.id,
          deleted_at: null
        },
      });
      return successResponse(req, res, { users });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
}

/**
 * Get user own data
 * @return user data
 */
exports.profile = async (req, res) => {
    try {
      const { userId } = req.user;
      const user = await db.users.findOne({  
        where: { 
          id: userId,
          deleted_at: null
        } 
      });
      return successResponse(req, res, { user });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
};

/**
 * Edit a User
 * @return user data
 */
exports.updateUser = async (req, res) => {
    try {
        // const { userId } = req.user;
        const userId = req.params.id;
        await db.users.update(req.body, {
          where: { 
            id: userId,
            deleted_at: null
          }
        })
        .then(async function  (result) {
          if(result){
            let user = await db.users.findOne({ where: { id: userId } });
            return successResponse(req, res, { user }); 
          }
        });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
}


/**
 * Delete a User
 * @return user data
 */
 exports.deleteUser = async (req, res) => {
  try {
      const userId = req.params.id;
      await db.users
      .update({ deletedAt: new Date }, { where: { id:userId } })
      .then(async function  (result) {
        if(result){
          return successResponse(req, res, { Message: 'User deleted successfully.' }); 
        }
      });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}
/**
 * Generate New Password
 * @return random unique 5 digit password
 */
 const generateNewPassword = (length) => {
  var result = [];
  let newGeneratedPassword;
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  newGeneratedPassword = result.join('');
    
  return newGeneratedPassword;
}
/**
 * Invite user 
 * @return Invite user data
 */
exports.inviteUser = async (req, res) => {

  const userExist = await db.users.findOne({ where: {  email: req.body.email} }) 
    if(!userExist) {
      const password = generateNewPassword(5);
      const encryptedPassword = crypto
      .createHash('md5')
      .update(password)
      .digest('hex');

      var userData = {}
      userData.fullName = req.body.fullName;
      userData.email = req.body.email;
      userData.password = encryptedPassword;
      userData.cardId = req.body.cardId;

      const k = db.users.create(
        userData
      );

      //Send invitation mail to user
      var mailResponse = await sendInvitationMail(req.body.email, password);
      return successResponse(req, res, { mailResponse }); 
    } else {
      throw new Error('This email id is already exist.');
    }
}

/**
 * Send Invitation Email
 * @return Invite User
 */
 const sendInvitationMail = async(email, password) => {
  var mailResponse = await sendRegisterEmail.sendEmailToUsers(email, password);
  if(mailResponse.accepted)  {
    const data = await db.users.findOne({ where: { email: email } })
    if(data) {
      return data;
    }
  }
    
}
