import express from 'express';
import validate from 'express-validation';
import * as userController from '../controllers/userController';
import apiMiddleware from '../../src/middleware/apiAuth';
import adminMiddleware from '../../src/middleware/adminAuth';
import * as userValidator from '../validators/userValidator';

const router = express.Router();

router.get('/', apiMiddleware, adminMiddleware, userController.allUsers);
router.get('/my-account', apiMiddleware, userController.profile);
router.put('/add-card/:id',
    validate(userValidator.addUserCard), 
    apiMiddleware, 
    adminMiddleware, 
    userController.addUserCard
);
router.get('/:id', apiMiddleware, adminMiddleware, userController.getUser);
router.put('/:id', 
    validate(userValidator.updateUser), 
    apiMiddleware, 
    adminMiddleware, 
    userController.updateUser
);
router.delete('/:id', apiMiddleware, adminMiddleware, userController.deleteUser);
router.post('/_invite', 
    validate(userValidator.inviteUser), 
    apiMiddleware, 
    adminMiddleware, 
    userController.inviteUser
);

module.exports = router;