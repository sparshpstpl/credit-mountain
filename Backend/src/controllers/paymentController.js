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
 * Get payment gateway list
 * @return Payment gateway data
 */
export const paymentGatewayList = async (req, res) => {
  try {
    let response = await paymentService.paymentGatewayList(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * stripe payment gateway
 * @return Response
 */
 export const createPaymentWithStripe = async (req, res) => {
  try {
    let response = await paymentService.createPaymentWithStripe(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

/**
 * stripe refund
 * @return Response
 */
 export const stripeRefund = async (req, res) => {
  try {
    let response = await paymentService.stripeRefund(req, res);
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