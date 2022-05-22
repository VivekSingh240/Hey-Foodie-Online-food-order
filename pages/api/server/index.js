// const stripe = require("stripe")("sk_test_51KlqH4SFewXPnaSfwJ6uhq7Vqq2mxG5gqSCd6XALqM420u6g3HpdWlzoDJClKto5Bo5ghy46YfqhnpvuZUvIMGgR00310ZvCAx");
let totalAmount = 0;

const stripe = new Stripe(
  "sk_test_51KlqH4SFewXPnaSfwJ6uhq7Vqq2mxG5gqSCd6XALqM420u6g3HpdWlzoDJClKto5Bo5ghy46YfqhnpvuZUvIMGgR00310ZvCAx"
);

export default async(req, res)=> {

  console.log('bodyfrompayment',req)
        try {
          console.log("response",{ body: req.body });
          const { cartItems } = req.body;
          const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(cartItems) * 100,
            currency: "eur",
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

  const calculateOrderAmount = (cartItems) => {
    console.log({ cartItems });
    cartItems.map((item) => {
      totalAmount += parseFloat(item.price.split("$")[1]) * item.quantity;
    });
    return totalAmount;
  };

 