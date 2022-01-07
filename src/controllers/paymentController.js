import db from '../models';
import { successResponse, errorResponse, uniqueId } from '../helpers';
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51KErubSH2tuMoMczTbi7kh3jpubjjWIrxbuIzy53gPC3muqoYV3mWy0NCWq59E6zSVNx78nKFz0mQSI3dupqGLBh00l0p4L6sm');


/**
 * get all payments
 * @param {Context} ctx
 */
export const allPayments = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const payments = await db.payments.findAll({raw: true,
        // attributes: [
        // //   'id',
        // //   'amount',
        //   [db.sequelize.col('users.full_name'), 'fullName'],
        // ],
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
export const getPayment = async (req, res) => {
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
 export const stripeTest = async (req, res) => {
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