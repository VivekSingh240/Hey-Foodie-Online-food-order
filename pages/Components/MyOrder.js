import React from 'react'
import { Card,Layout, Menu, Row, Col, Carousel,Typography } from "antd";
import  FooterComponent  from "../Components/footer.tsx";
import  Pageheader  from "../Components/dashboardheader.js";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
const { Header, Footer, Sider, Content } = Layout;
 const MyOrder = () => {
    const router = useRouter();
    const {Title} = Typography;
    const [order,Setorder]=useState([])
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("Cart"));
        console.log("cart items : ", cartItems);
        
      
        if (cartItems) {
          setItems(cartItems);
          Setorder(cartItems);
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
          console.log("order", order);
        }
      }, []);
  return (
      <Layout>
          <Header>
          <Pageheader/>
          </Header>
          <Content>
          <Row justify="space-around " style={{ backgroundColor: "#ed9191", height: "auto" }}>
        <Col span={24}>
        <Title style={{textAlign:"center",fontSize:"25px",fontFamily:"serif",fontWeight:"800",marginTop:"5px"}}>My Orders</Title>
          <Card style={{ backgroundColor: "#ed9191",marginTop:"20px" }}>
            <Row gutter={[0, 30]}>
              {items?.map((item, i) => {
                return (
                  <Col span={24} key={i}>
                    <Card style={{ height: 150 }}>
                      <Row>
                        <Col span={8}>
                          <span>
                            <img
                              alt="example"
                              src={`${item.image}`}
                              style={{ height: 100, width: 150 }}
                            />
                          </span>
                        </Col>
                        <Col span={8}>
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
                        <Col span={8}>
                          <Row>
                            <Col span={24} style={{fontWeight:"600",fontSize:"24px",color:"green"}}>Payment Successful</Col>
                            <Col style={{fontWeight:"400",fontSize:"18px"}}  span={24}>Order:<span>Placed</span></Col>
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
       </Row> 
          </Content>
          <Footer>
          <FooterComponent/>
          </Footer>
      </Layout>
    
  )
}
export default MyOrder
