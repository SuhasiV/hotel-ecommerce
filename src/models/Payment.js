import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
    },
    userId: {
      type: String,
    },
    email: {
      type: String,
    },
    roomIdsBooked: {
      type: [String],
    },
    amount: {
      type: Number,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    razorpay_order_id: {
      type: String,
      default: null,
    },
    razorpay_payment_id: {
      type: String,
      default: null,
    },
    razorpay_signature: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
