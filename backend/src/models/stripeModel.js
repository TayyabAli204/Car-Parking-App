const mongoose = require('mongoose');

// Define the payment schema
const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paymentIntent: {
    type: String,
    required: true,
  },
  ephemeralKey: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
});

// Create the payment model
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;


