require('dotenv').config();
import db from '../models';
import { successResponse, errorResponse, uniqueId } from '../helpers';
import Stripe from 'stripe';
import braintree from 'braintree';
const stripe = new Stripe(process.env.STRIPE_KEY);

//Braintree Connection
var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
  });

/**
 * get all payments
 * @param {Context} ctx
 */
exports.allPayments = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 100;
    const payments = await db.payments.findAll({raw: true,
        include: [
          {
            model: db.users,
            attributes: [
              'fullName' //add another fields
            ],
            as: 'users'
          },
        ],
      order: [['createdAt', 'DESC'], ['id', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, payments );
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

/**
 * get payment gateway list
 * @return Payment gateway data
 */
exports.paymentGatewayList = async (req, res) => {
  try {
    const paymentType = await db.payment_types.findAll();
    return successResponse(req, res, paymentType );
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

/**
 * Get a User
 * @return user data
 */
exports.getPayment = async (req, res) => {
  try {
    const users = await db.payments.findOne({raw: true,
      include: [
        {
          model: db.users,
          attributes: [
            'fullName'
          ],
          as: 'users'
        },
      ],
      where: { id: req.params.id },
    });
    return successResponse(req, res, { users });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * stripe testing
 * @return user data
 */
 exports.stripeTest = async (req, res) => {
  try {
      const { userId } = req.body;
      var paymentData = {}
      paymentData.userId = userId;
      paymentData.amount = req.body.amount
      paymentData.paymentTypeId = req.body.paymentType 
      paymentData.paymentGatewayId = '22'

      const user = await db.users.findOne({ where: {  id: userId} }) 

      if (user.customerId){
        // When it's time to charge the customer again, retrieve the customer ID.
        const paymentCreated = db.payments.create(
          paymentData
        ).then(async result => {
          stripe.charges.create({ 
            amount: req.body.amount * 100,
            description: `Amount of payment ${result.id}`, 
            currency: 'usd', 
            customer: user.customerId
          }); 
          await db.payments.update(
            { paymentStatus: true }, {
            where: { 
              id: result.id,
              deleted_at: null
            }
          })
        })
        return successResponse(req, res, '', 'Payment successfully executed.' );
      } else {
        // Charge the Customer instead of the card:
        const paymentCreated = db.payments.create(
          paymentData
        ) .then(async result => {
          await stripe.customers.create({
            email: user.email,
            source: req.body.stripeToken, 
            name: user.fullName, 
            address: { 
              line1: '510 Townsend St',
              postal_code: '98140',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
            } 
          }).then(async(customer) => { 
          await db.users.update(
            { customerId: customer.id }, {
            where: { 
              id: userId,
              deleted_at: null
            }
          })
          stripe.charges.create({ 
              amount: req.body.amount * 100,
              description: `Amount of payment ${result.id}`, 
              currency: 'usd', 
              customer: customer.id 
            }); 
          })
            await db.payments.update(
              { paymentStatus: true }, {
              where: { 
                id: result.id,
                deleted_at: null
              }
            })
        });
        return successResponse(req, res, '', 'Payment successfully executed.' );
      
      }
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * Get braintree token
 * @return token
*/
exports.generateToken = async (req, res) => {
    try {
      await gateway.clientToken.generate({}).then((response) => {
        return successResponse(req, res, response );
      })
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
}

/**
 * braintree testing
 * @return user data
*/
exports.braintreeTest = async (req, res) => {
    try {
      const nonceDataFromClient = req.body.payment_method_nonce
      const amount = req.body.amount
      
      await gateway.transaction.sale({
        amount: amount,
        paymentMethodNonce: nonceDataFromClient,
        options: {
        submitForSettlement: true
        }
      }).then(function (result) {
        if (result.success) {
          return successResponse(req, res, result );
        } else {
          return errorResponse(req, res, error.message);            
        }
      }).catch(function (err) {
        return errorResponse(req, res, err);
      });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
}