import Payment from "@/models/Payment";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "rzp_test_7VgUXpgqm1SI60",
  key_secret: "fL4WpBFO1LFOnnsaeHzvJ0Ei",
});

// export async function POST(req) {
//   const { amount, price } = req.json();
//   console.log("amount", amount);
//   console.log("price", price);

//   const options = {
//     amount: amount,
//     currency: "INR",
//     notes: {
//       // These notes will be added to your transaction. So you can search it within their dashboard.
//       // Also, it's included in webhooks as well. So you can automate it.
//       userId,
//     },
//   };

//   try {
//     const order = await razorpay.orders.create(options);
//     const dbOrderData = {
//       userId,
//       email,
//       orderId: order.id,
//       info: ["jcbsdc", "dhcsd"],
//       amount,
//     };

//     const newOrder = await Payment.create(dbOrderData);

//     return NextResponse.json({ msg: "success", order, newOrder });
//   } catch (error) {
//     console.error("Error:", error);

//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json({
//     message: "data sjcnskc",
//     success: true,
//     price,
//     amount,
//   });
// }

export async function POST(req) {
  try {
    const body = await req.json();
    const amount = body.price * 100;

    const options = {
      amount: amount,
      currency: "INR",
      notes: {
        userId: body.user,
      },
    };
    const order = await razorpay.orders.create(options);

    const dbOrderData = {
      userId: body.user,
      email: body.email,
      orderId: order.id,
      roomIdsBooked: body.roomIdsToUpdate,
      amount: amount,
    };

    const newOrder = await Payment.create(dbOrderData);

    return NextResponse.json({
      message: "razorpay",
      success: true,
      order,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
