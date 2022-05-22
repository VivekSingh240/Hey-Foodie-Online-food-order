import Stripe from "stripe";
const stripe = Stripe("sk_test_51KlqH4SFewXPnaSfwJ6uhq7Vqq2mxG5gqSCd6XALqM420u6g3HpdWlzoDJClKto5Bo5ghy46YfqhnpvuZUvIMGgR00310ZvCAx");

export default async (req, res) => {
  try {
    console.log("response", { body: req.body.body });
    const { items } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items) * 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("error", error);
    res.send({ clientSecret: "" });
  }
}

const calculateOrderAmount = (items) => {
  let totalAmount = 0;
  console.log({ items });
  items.map((item) => {
    totalAmount += item.price * item.quantity;
  });
  return totalAmount;
};

