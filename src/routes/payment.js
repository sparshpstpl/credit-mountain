import express from 'express';
import * as paymentController from '../controllers/paymentController';
import apiMiddleware from '../../src/middleware/apiAuth';
import adminMiddleware from '../../src/middleware/adminAuth';

const router = express.Router();

router.get('/stripe', paymentController.stripeTest);
router.get('/', apiMiddleware, adminMiddleware, paymentController.allPayments);
router.get('/:id', paymentController.getPayment);

// router.post('/:id', paymentController.newPayment);
// router.put('/_refund', paymentController.refund);

module.exports = router;
