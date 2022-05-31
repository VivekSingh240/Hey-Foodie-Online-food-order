import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from "react";
import styles from "./App.module.css";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/SuccessPage`,
      },
    });

    if(!error){
      console.log("tfgklhjjhvsbvkj");
      const completedOrders = localStorage.getItem("Cart");
      console.log("after checkout : ",completedOrders)
      try{
          const orders = JSON.parse(localStorage.getItem("Orders"));
          const modifiedOrderArr = {...orders,...completedOrders};
          console.log("modified ::::" , modifiedOrderArr);
          localStorage.setItem("Orders",JSON.stringify(modifiedOrderArr));
      }
      catch(err){
        localStorage.setItem("Orders",JSON.stringify(completedOrders));    
      }
      localStorage.setItem("Cart", []);
    }

    console.log("Stripe Error 1", error);
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      console.log("Stripe Error ", error);
      setMessage("An unexpected error occured.", error.message);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button className={styles.button} disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className={styles.spinner} id="spinner"></div> : "Pay Now"}
        </span>
      </button>
      {message && <div className={styles.payment_message} id="payment-message">{message}</div>}
    </form>
  )
};

export default CheckoutForm