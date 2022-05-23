import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col, Carousel, Button, Badge } from "antd";
import Payment from "../Payment";
import { Card, Avatar,Form,Input,Typography } from "antd";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import  FooterComponent  from "../../pages/Components/footer.tsx";

const Cart = () => {
  const {Title} = Typography;
  const { Header, Footer, Sider, Content } = Layout;
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState()
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("Cart"));
    console.log("cart items", cartItems)
    if (cartItems) {
      setItems(cartItems);
      setIsModalVisible(false)
      const data = cartItems.map((ele, i) => {
        return ele.quantity * ele.price;
      });

      let sum = 0;

      for (let i = 0; i < data.length; i++) {
        sum += data[i];
      }
      setTotal(sum)

      console.log("sum", total);
      console.log("dataa", data);
    }
  }, [router.route]);

  return (
    <>
      <Row justify="space-around " style={{ backgroundColor: "#ed9191", height: "auto" }}>
        <Col span={12}>
        <Title style={{textAlign:"center",fontSize:"25px",fontFamily:"serif",fontWeight:"800",marginTop:"5px"}} >Cart Product</Title>
          <Card style={{ backgroundColor: "#ed9191",marginTop:"20px" }}>
            <Row gutter={[0, 30]}>
              {items?.map((item, i) => {
                return (
                  <Col span={24} key={i}>
                    <Card style={{ height: 150 }}>
                      <Row>
                        <Col span={12}>
                          <span>
                            <img
                              alt="example"
                              src={`${item.image}`}
                              style={{ height: 100, width: 150 }}
                            />
                          </span>
                        </Col>
                        <Col span={12}>
                          <Row>
                            <Col>
                              <strong>{item.name} *</strong>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>
                                {" "}
                                <strong>Price : </strong>
                                {item.price}
                              </span>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                              <span>
                                {" "}
                                <strong> Quantity : </strong>
                                {item.quantity}
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>
                                {" "}
                                <strong> Total: </strong>
                                {item.quantity * item.price}
                              </span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })}
            </Row>

            {items.length !== 0 ? (

              <>
                <Row>
                  <Col span={24}>
                    <Card>
                      <Row>
                        <Col>Total Amount:{total}</Col>
                      </Row>

                    </Card>
                  </Col>

                </Row>
              </>
            ) : (
              <Row>
                <Col span={24}>
                  <Card>
                    <Row>
                      <Col>Cart IS EMPTY</Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
        <Col span={10}>
          <Title style={{textAlign:"center",fontSize:"25px",fontFamily:"serif",fontWeight:"800",marginTop:"5px"}} >User Order Details</Title>
        <Form 
      name="basic"
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item wrapperCol={{ span: 24 }}
       name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  
        placeholder="Enter Your Name"
        style={{height:"40px",borderRadius:"24px"}}
        
         />
      </Form.Item >
      <Form.Item wrapperCol={{ span: 24 }}
       name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  
        style={{height:"40px",borderRadius:"24px"}}
        placeholder="Enter Your Mobile No.-"
         />
      </Form.Item >
      <Form.Item wrapperCol={{ span: 24 }}
       name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  
        style={{height:"40px",borderRadius:"24px"}}
        placeholder="Enter Your Delivery Address"
         />
      </Form.Item >

      <Form.Item
        wrapperCol={{ span: 24 }}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input 
        style={{height:"40px",borderRadius:"24px"}}
        placeholder="Enter your House No. and Pin Code"
         />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ span: 24 }} >
        <Button block onClick={() => setIsModalVisible(true)} style={{padding:"20px 30px 20px 30px",justifyContent:"center",alignItems:"center",display:"inline-flex",height:"40px",borderRadius:"24px",backgroundColor:"green"}} type="primary" size='large'  >
          Pay Now
        </Button>
      </Form.Item>
      {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" block onClick={deletedData} >
          Delete
        </Button>
      </Form.Item> */}
    </Form>
        </Col>
        <Payment isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} items={items} />
      </Row>
      <Footer>
      <FooterComponent/>
      </Footer>
     
    </>
  );
};

export default Cart;
