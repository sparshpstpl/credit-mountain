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
    const limit = 2;
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
 * Get a User
 * @return user data
 */
exports.getPayment = async (req, res) => {
  try {
    const users = await db.payments.findOne({raw: true,
      // attributes: [
      // //   'id',
      // //   'amount',
      //   [db.sequelize.col('users.full_name'), 'fullName'],
      // ],
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
      await stripe.customers
        .create({
          email: "kanak@mailinator.com",//req.body.stripeEmail, 
        //source: "test",//req.body.stripeToken, 
        name: 'Gautam Sharma', 
        address: { 
            line1: 'TC 9/4 Old MES colony', 
            postal_code: '110092', 
            city: 'New Delhi', 
            state: 'Delhi', 
            country: 'India', 
        } 
        })
      //   .then((customer) => { 

      //     return stripe.charges.create({ 
      //         amount: 7000,    // Charing Rs 25 
      //         description: 'Web Development Product', 
      //         currency: 'USD', 
      //         customer: customer.id 
      //     }); 
      // }) 
      // .then((charge) => { 
      //     res.send("Success") // If no error occurs 
      // }) 
      .catch((err) => { 
          res.send(err)    // If some error occurs 
      }); 
        

    let payments = "test";
    return successResponse(req, res, payments );
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
            amount: '100.00',
            paymentMethodNonce: 'nonce-from-the-client',
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