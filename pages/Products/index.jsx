import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col, Carousel, Button, Badge } from "antd";
import {
  ShoppingCartOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import { Card, Avatar,Typography } from "antd";
const { Meta } = Card;
import { useQuery } from "graphql-hooks";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Foodtheme from "../Components/foodtheme";
import  FooterComponent  from "../../pages/Components/footer.tsx";
const { Header, Content, Footer } = Layout;

const HOMEPAGE_QUERY = `query HomePage($limit: Int) {
    Products(limit: $limit) {
      id
      category
      name
      image
      price
      description
    }
  }`;

const ProductCard = () => {
  const {Title,Paragraph} = Typography
  const [cartItemList, setCartItemList] = useState(0);
  const router = useRouter();

  const { data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 20,
    },
  });

  const products =data && data.Products.filter((item) => {
      return item.category === router.query.ct;
    });

    
  const saveData = (product) => {
    try {
      const getDatFromLocalStorage = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [];
      const newCart = getDatFromLocalStorage?.length ? getDatFromLocalStorage : [];
      let itemInCart = newCart.find(item => item && item.name === product.name);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        itemInCart = {...product,quantity: 1};
        newCart.push(itemInCart);
      }
      localStorage.setItem("Cart", JSON.stringify(newCart));
      setCartItemList(localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")).length : 0);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" style={{justifyContent:"end"}}>
            <Menu.Item key="orders">
              <a href="">My Orders</a>
            </Menu.Item>
            <Menu.Item key="cart">
            <Link href={`/Cart`}>
                <Badge count={cartItemList} size="small" showZero>
                  <ShoppingCartOutlined
                    key={"shopping"}
                    style={{ color: "white", fontSize: "25px" }}
                  />
                </Badge>
                </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <Foodtheme/>
          <Title style={{textAlign:"center",fontSize:"32px",fontFamily:"serif",fontWeight:"800",marginTop:"10px"}} >Select the Best Product</Title>
          <Row justify="space-around">
            <Col span={24} style={{padding:"50px"}}>
              <Row align="middle"  gutter={[0, 40]}>
                {products?.map((item, i) => {
                  return (
                    <Fragment>
                    <Col span={4} key={i}>
                      <img alt="example" src={`${item.image}`} style={{ height: 150, width: 200 }}/>
                    </Col>  
                    <Col span={18}>
                      <Row >
                        <Col span={24}><Title  style={{fontSize:"20px",fontWeight:600}}> {item.name} </Title></Col>
                        <Col span={24}><Paragraph style={{fontSize:"14px",fontWeight:500}}> {item.description}</Paragraph></Col>
                        <Col span={24} style={{fontSize:"16px",fontWeight:600,marginBottom:"4px"}}>  Price : {item.price}$ </Col>
                        <Col span={24}><Button type="primary" shape="round" onClick={() => saveData(item)}>
                              ADD
                          <ShoppingCartOutlined key={"shopping"} style={{ color: "black" }}/>
                            </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Fragment>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer>
        <FooterComponent/>
        </Footer>
      </Layout>
    </>
  );
};

export default ProductCard;
