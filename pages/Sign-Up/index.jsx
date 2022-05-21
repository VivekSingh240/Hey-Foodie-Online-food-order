import { Form, Input, Button, Checkbox, Row, Col, Card,Avatar } from "antd";
import { InsertData, deletedata } from "../../Graphql/Mutation";
import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "graphql-hooks";
import Logo from "../../public/Images/foodordering.png";
import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { EmailData } from "../../Graphql/Mutation/Query";
import Link from "next/link";

import { Pageheader } from "../Components";
import {signIn, signOut, useSession} from "next-auth/react"

export default function Sign() {
  const [InsertDetails] = useMutation(InsertData);
  const [removeData] = useMutation(deletedata);
  const [form] = Form.useForm();
  const [alldata, setallData] = useState({
    // email:'',
    // password:''
  });
  const [userDetails, setDetails] = useState({
    email: "",
    password: "",
  });

  const { data } = useQuery(EmailData, {
    variables: {
      email: userDetails.email,
    },
  });
  console.log("tabledata", data);
  let InsertedEmails = "";
  if (data && data.user[0]) {
    InsertedEmails = data.user[0].email;
  }

  const submit = async () => {
    try {
      form.validateFields().then(async (values) => {
        if (
          userDetails.email !== "" &&
          userDetails.password !== "" &&
          InsertedEmails !== userDetails.email
        ) {
          console.log("userDetails__1", userDetails);
          const Data = await InsertDetails({
            variables: { objects: userDetails },
          });
          console.log("dataaaa", Data);
          window.location = "/Login";
        } else {
          alert("THIS EMAIL ALREADY EXIST");
        }
      });
      form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };

  const { session, lodingSession } = useSession();

  if (lodingSession) {
    return <p>Loding...</p>;
  }

  return (
    <div className="Login">
    
      <Row justify={"center"} align="middle" style={{ height: "100vh" }}>
        <Col span={8} style={{ textAlign: "center" }}>
          <Card>
            <Row gutter={[0, 15]}>
              <Col span={24} style={{ textAlign: "center" }}>
                <Image src={Logo} />
              </Col>
              <Col
                span={24}
                style={{
                  fontFamily: "serif",
                  fontSize: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  color: "#FEEA3C",
                }}
              >
                Sign Up
              </Col>
              <Col span={24}>
                <Form
                  name="basic"
                  wrapperCol={{ span: 24 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  form={form}
                  onFinish={submit}
                >
                  <Form.Item
                    wrapperCol={{ span: 24 }}
                    name="EmailId"
                    label="Email ID"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      style={{ height: "40px", borderRadius: "24px" }}
                      value={userDetails.email}
                      placeholder="Enter your Email Id"
                      onChange={(e) => {
                        setDetails({ ...userDetails, email: e.target.value });
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{ span: 24 }}
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      value={userDetails.password}
                      style={{ height: "40px", borderRadius: "24px" }}
                      placeholder="Enter your password"
                      onChange={(e) => {
                        setDetails({
                          ...userDetails,
                          password: e.target.value,
                        });
                      }}
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                      style={{
                        padding: "20px 30px 20px 30px",
                        alignItems: "center",
                        display: "inline-flex",
                        height: "40px",
                        borderRadius: "24px",
                      }}
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
                      Submit
                    </Button>
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 24 }}>
                    {/* <Button
                        style={{
                          padding: "20px 30px 20px 30px",
                          alignItems: "center",
                          display: "inline-flex",
                          height: "40px",
                          borderRadius: "24px",
                        }}
                        type="primary"
                        htmlType="submit"
                        size="large"
                      >
                       Submit
                      </Button> */}
                    {!session && (
                      <>
                        <Button onClick={() => signIn()} style={{
                          padding: "20px 30px 20px 30px",
                          alignItems: "center",
                          display: "inline-flex",
                          height: "40px",
                          borderRadius: "24px",
                        }}
                       
                        htmlType="submit"
                        size="large"><Avatar src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg"/>Continue With Google</Button>
                      </>
                    )}

                    {session && (
                      <>
                        <h4> you are logged in as :{session.user.name}</h4>
                        <Button onClick={() => signOut()} style={{
                          padding: "20px 30px 20px 30px",
                          alignItems: "center",
                          display: "inline-flex",
                          height: "40px",
                          borderRadius: "24px",
                        }}
                        type="primary"
                        htmlType="submit"
                        size="large">Sign Out</Button>
                      </>
                    )}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

