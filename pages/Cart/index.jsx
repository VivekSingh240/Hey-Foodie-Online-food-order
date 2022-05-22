import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col, Carousel, Button, Badge } from "antd";
import Payment from "../Payment";
import { Card, Avatar } from "antd";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";



const { Meta } = Card;

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total,setTotal] = useState()
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("Cart"));
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
  

  // ---------------------------------------------------------------------------------
  

  return (
    <>
      <Row style={{ backgroundColor: "beige", height: "auto" }}>
        <Col span={12}>
          <Card style={{ backgroundColor: "pink" }}>
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
              <Row>
                <Col>
                  <Button onClick={()=>setIsModalVisible(true)} >Pay now</Button>
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
        <Payment isModalVisible = {isModalVisible} setIsModalVisible = {setIsModalVisible} items= {items} />


      </Row>
     
    </>
  );
};

export default Cart;
