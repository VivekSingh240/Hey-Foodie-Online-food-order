import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col, Carousel, Button, Badge } from "antd";

import { Card, Avatar } from "antd";

import React from "react";
import { useEffect } from "react";
const Cart = () => {
  
  return (
    <>
      <Row>
        <Col xs={24} sm={24} lg={8}>
          <Card>
            <h4>MY PRODUCTS</h4>
            <Row gutter={[0, 3]}>
              <Col span={24}>
                <Card type="inner" size="small">
                  <p>
                    Today Leave
                    <strong>
                      4 <small>/ 65</small>
                    </strong>
                  </p>
                </Card>
              </Col>
              <Col span={24}>
                <Card type="inner" size="small">
                  <p>
                    Today Leave
                    <strong>
                      15<small>/ 92</small>
                    </strong>
                  </p>
                </Card>
              </Col>

              <Col span={24}>
                <Card type="inner" size="small">
                  <p>
                    Today Leave
                    <strong>
                      85<small>/112</small>
                    </strong>
                  </p>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
