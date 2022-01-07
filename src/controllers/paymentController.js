import paymentService from '../services/paymentService'

/**
 * get all payments
 * @param {Context} ctx
 */
export const allPayments = async (req, res) => {
  try {
    let response = await paymentService.allPayments(req, res);
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
    let response = await paymentService.getPayment(req, res);
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
    let response = await paymentService.stripeTest(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * Get braintree token
 * @return token
*/
export const generateToken = async (req, res) => {
  try {
    let response = await paymentService.generateToken(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * braintree testing
 * @return user data
*/
export const braintreeTest = async (req, res) => {
  try {
    let response = await paymentService.braintreeTest(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}