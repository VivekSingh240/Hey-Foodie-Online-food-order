import { Menu , Layout } from "antd";
import React from 'react';
// import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import Link from "next/link";
import {Dropdown, Button, message, Space, Tooltip } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
const {Header} = Layout;

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'My Orders',
          key: '1',
        //   icon: <UserOutlined />,
        },
        {
          label: 'Go to Cart',
          key: '2',
        //   icon: <UserOutlined />,
        },
        {
          label: 'Log Out',
          key: '3',
        //   icon: <UserOutlined />,
        },
      ]}
    />
  );

 const DashboardHeader = () => {
  return (
    <Fragment>
      <Header>
        <Menu mode="horizontal" theme="dark" style={{justifyContent:"end"}}>
          <Menu.Item key="sign_up">
            {<ShoppingCartOutlined style={{margin:"5px"}}/>}
            <Link href={`/Sign-Up`}>Cart</Link>
          </Menu.Item>

          <Menu.Item key="login">
            <Link href={`/Login`}>My Orders</Link>
          </Menu.Item>
          <Menu.Item key="contact" style={{marginLeft: "-36px"}}>
          <Space wrap>
            <Dropdown.Button style={{alignItems: "baseline",display: "flow-root"}} icon={<UserOutlined />} onClick={handleButtonClick} overlay={menu}>
            {/* Enter your name */}
            </Dropdown.Button>
            </Space>
          </Menu.Item>
        </Menu>
      </Header>
    </Fragment>
  );
};
export default DashboardHeader;