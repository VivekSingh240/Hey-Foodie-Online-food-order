import { Button, Modal } from "antd";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Payment/Checkout";
import { useEffect } from "react";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51KlqH4SFewXPnaSfPWwlKupwzmYYOfMUstmc5HPCwi7mVxh374CEBGEvr8bHqJRnOKX7tHunysKjEme6HqWRl2MJ00n0QfFmpI"
);

const Payment = ({ isModalVisible, setIsModalVisible, items }) => {
  const [clientSecret, setClientSecret] = useState(null);
  useEffect(() => {
    console.log({ isModalVisible });
    if (isModalVisible) {
        // C:\Users\ForceBolt\Downloads\clg\pages\api\server\index.js
      axios.post("/api/server/index", {
        // method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items}),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          console.log('clientsec',data)
        })
        .catch((error) => {
          console.log("clientsecrecterr",{ error });
        });
    }
  }, [isModalVisible]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      >
      {clientSecret && 
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      }
      </Modal>

    </>
  );
};

export default Payment;
