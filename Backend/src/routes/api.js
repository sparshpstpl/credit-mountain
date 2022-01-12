import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/userController';
import * as userValidator from '../validators/userValidator';
import apiMiddleware from '../../src/middleware/apiAuth';

const router = express.Router();

router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);

module.exports = router;
