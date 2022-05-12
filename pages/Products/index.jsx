import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col, Carousel } from "antd";

import { Card, Avatar } from "antd";
const { Meta } = Card;
import { useQuery } from 'graphql-hooks'

const HOMEPAGE_QUERY = `query HomePage($limit: Int) {
    Products(limit: $limit) {
      id
      category
      name
      image
      price
      description
    }
  }`

const ProductCard = () => {
    const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
        variables: {
          limit: 20
        }
      })
      console.log('data',data && data.Products)
  return (
    <>
    {data && data.Products.map((item)=>{
      console.log('item',item.image)
      return(
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={`${item.image}`}
          />
        }
      >
        <Meta
          //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={item.name}
          description={item.description}
        />
      </Card>
      )
    }) }
      
    </>
  );
};

export default ProductCard;
