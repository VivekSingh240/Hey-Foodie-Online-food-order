import { Form, Input, Button, Checkbox, Row, Col, Card } from "antd";
import { InsertData, deletedata } from "../../Graphql/Mutation";
import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "graphql-hooks";
import Logo from "../../public/Images/foodordering.png";
import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { LoginInfo } from "../../Graphql/Mutation/Query";
import Link from "next/link";

export default function Login() {
  const [InsertDetails] = useMutation(InsertData);
  const [removeData] = useMutation(deletedata);
  const [form] = Form.useForm();

  const [userDetails, setDetails] = useState({
    email: "",
    password: "",
  });

  const { data } = useQuery(LoginInfo, {
    variables: {
      email: userDetails.email,
      password: userDetails.password,
    },
  });
  console.log("logindata", data);
  let InsertedLoginData = {
    email: "",
    password: "",
  };

  if (data && data.user[0]) {
    InsertedLoginData.email = data.user[0].email;
    InsertedLoginData.password = data.user[0].password;
  }

  const submit = async () => {
    try {
      form.validateFields().then(async (values) => {
        if (
          userDetails.email !== "" &&
          userDetails.password !== "" &&
          InsertedLoginData.email == userDetails.email &&
          InsertedLoginData.password == userDetails.password
        ) {
          window.location = "/";
          console.log("userDetails__1", InsertedLoginData);
        } else {
          alert("Entered Email or Password is wrong");
        }
      });
      form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };

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
                Login
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
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      style={{ height: "40px", borderRadius: "24px" }}
                      value={userDetails.email}
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
                      Log In
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    New Here ?
                    <Link href={"/Sign-Up"}>
                      <span style={{ color: "red" }}> Create New </span>
                    </Link>
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
