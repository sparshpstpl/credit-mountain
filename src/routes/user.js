import express from 'express';
import * as userController from '../controllers/userController';
import apiMiddleware from '../../src/middleware/apiAuth';
import adminMiddleware from '../../src/middleware/adminAuth';

const router = express.Router();

router.get('/', apiMiddleware, adminMiddleware, userController.allUsers);
router.get('/my-account', apiMiddleware, userController.profile);
router.get('/:id', apiMiddleware, adminMiddleware, userController.getUser);
router.put('/:id', apiMiddleware, adminMiddleware, userController.updateUser);
// router.delete('/:id', userController.deleteUser);
router.post('/_invite', userController.inviteUser);

module.exports = router;
