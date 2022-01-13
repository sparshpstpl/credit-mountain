import express from 'express';
import * as paymentController from '../controllers/paymentController';
import apiMiddleware from '../../src/middleware/apiAuth';
import adminMiddleware from '../../src/middleware/adminAuth';

const router = express.Router();

router.get('/gateway', apiMiddleware, adminMiddleware, paymentController.paymentGatewayList);
router.post('/gateway/stripe', apiMiddleware, adminMiddleware, paymentController.createPaymentWithStripe);
router.get('/gateway/stripe/refund/:id', apiMiddleware, adminMiddleware, paymentController.stripeRefund);
router.post('/gateway/braintree', paymentController.braintreeTest);
router.get('/gateway/braintree-token', paymentController.generateToken);
router.get('/', apiMiddleware, adminMiddleware, paymentController.allPayments);
router.get('/:id', paymentController.getPayment);

// router.post('/:id', paymentController.newPayment);
// router.put('/_refund', paymentController.refund);

module.exports = router;
