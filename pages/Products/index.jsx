import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col, Carousel, Button, Badge } from "antd";
import {
  ShoppingCartOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import { Card, Avatar } from "antd";
const { Meta } = Card;
import { useQuery } from "graphql-hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
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
          <Menu mode="horizontal" theme="dark">
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
          <Row>
            <Col span={24}>
              <Row gutter={[0, 90]}>
                {products?.map((item, i) => {
                  return (
                    <Col span={8} key={i}>
                      <Card
                        style={{ width: 300, height: 500 }}
                        cover={
                          <img
                            alt="example"
                            src={`${item.image}`}
                            style={{ height: 250, width: 300 }}
                          />
                        }

                      >
                        <Meta
                          title={item.name}
                          description={item.description}
                        />
                        <Row gutter={[5, 5]}>
                          <Col span={24} style={{ fontSize: "15px" }}>
                            Price : {item.price}
                          </Col>

                          <Col span={24}>
                            <Button
                              type="primary"
                              shape="round"
                              onClick={() => saveData(item)}
                            >
                              ADD
                              <ShoppingCartOutlined
                                key={"shopping"}
                                style={{ color: "black" }}
                              />
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ProductCard;
