import { Button, Modal, Spin } from "antd";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Payment/Checkout";
import React,{ useEffect,Fragment } from "react";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51KlqH4SFewXPnaSfPWwlKupwzmYYOfMUstmc5HPCwi7mVxh374CEBGEvr8bHqJRnOKX7tHunysKjEme6HqWRl2MJ00n0QfFmpI"
);

const Payment = ({ isModalVisible, setIsModalVisible, items }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [isSpin, setIsSpin] = useState(false);

  useEffect(() => {
    console.log({ isModalVisible });
    if (isModalVisible) {
      setIsSpin(true);
      fetch("/api/stripe_server", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          console.log("Response", data);
        })
        .catch((error) => {
          console.log("Client Secrect Error", { error });
        });
        setIsSpin(false);
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
    <Fragment>
      <Modal
        title="Payments"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Spin spinning={isSpin}>
          {clientSecret &&
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          }
        </Spin>

      </Modal>
    </Fragment>
  );
};

export default Payment;
