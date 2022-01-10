import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import db from '../models';
import { successResponse, errorResponse, uniqueId } from '../helpers';
import userService from '../services/userService'

/**
 * Get login data
 * @return user email and password
 */
export const login = async (req, res) => {
    try {
        let response = await userService.login(req, res);
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
};

/**
 * Get All Users
 * @return users data
 */
export const allUsers = async (req, res) => {
  try {
        let response = await userService.allUsers(req, res);
    } catch(error) {
        return errorResponse(req, res, error.message);
    }
}

/**
 * Get a User
 * @return user data
 */
export const getUser = async (req, res) => {
  try {
    let response = await userService.getUser(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * Get user own data
 * @return user data
 */
export const profile = async (req, res) => {
  try {
    let response = await userService.profile(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

/**
 * Edit a User
 * @return user data
 */
export const updateUser = async (req, res) => {
  try {
    let response = await userService.updateUser(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * Delete user 
 * @return Delete user data
 */
export const deleteUser = async (req, res) => {
  try {
    let response = await userService.deleteUser(req, res);
    // let response = await userService.update({ deletedAt: new Date }, { where: { id: user.id } });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * Invite user 
 * @return Invite user data
 */
export const inviteUser = async (req, res) => {
  try {
    let response = await userService.inviteUser(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

export const register = async (req, res) => {
  try {
    const {
      email, password, firstName, lastName,
    } = req.body;
    if (process.env.IS_GOOGLE_AUTH_ENABLE === 'true') {
      if (!req.body.code) {
        throw new Error('code must be defined');
      }
      const { code } = req.body;
      const customUrl = `${process.env.GOOGLE_CAPTCHA_URL}?secret=${
        process.env.GOOGLE_CAPTCHA_SECRET_SERVER
      }&response=${code}`;
      const response = await axios({
        method: 'post',
        url: customUrl,
        data: {
          secret: process.env.GOOGLE_CAPTCHA_SECRET_SERVER,
          response: code,
        },
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
      });
      if (!(response && response.data && response.data.success === true)) {
        throw new Error('Google captcha is not valid');
      }
    }

    const user = await User.scope('withSecretColumns').findOne({
      where: { email },
    });
    if (user) {
      throw new Error('User already exists with same email');
    }
    const reqPass = crypto
      .createHash('md5')
      .update(password)
      .digest('hex');
    const payload = {
      email,
      firstName,
      lastName,
      password: reqPass,
      isVerified: false,
      verifyToken: uniqueId(),
    };

    const newUser = await User.create(payload);
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.scope('withSecretColumns').findOne({
      where: { id: userId },
    });

    const reqPass = crypto
      .createHash('md5')
      .update(req.body.oldPassword)
      .digest('hex');
    if (reqPass !== user.password) {
      throw new Error('Old password is incorrect');
    }

    const newPass = crypto
      .createHash('md5')
      .update(req.body.newPassword)
      .digest('hex');

    await User.update({ password: newPass }, { where: { id: user.id } });
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
