import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/userController';
import * as userValidator from '../validators/userValidator';

const router = express.Router();

router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);
router.post(
  '/register',
  validate(userValidator.register),
  userController.register,
);

module.exports = router;
