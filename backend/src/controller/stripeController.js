
const stripe = require('stripe')(process.env.Stripe_S_Key);

const getStripePayment = async (req, res) => {
  
    // Use an existing Customer ID if this is a returning customer.
    const {amount,currency} = req.body;
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2022-11-15'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency:currency,
      customer: customer.id,
      payment_method_types: ['card'],
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  
    
  };

  module.exports = {getStripePayment}