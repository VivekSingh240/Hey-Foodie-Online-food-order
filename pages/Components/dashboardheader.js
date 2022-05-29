import { Menu , Layout } from "antd";
import React from 'react';
// import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import Link from "next/link";
import {Dropdown, Button, message, Space, Tooltip } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useSession, signIn, signOut } from "next-auth/react"
import Router  from 'next/router'
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
  const handleLogout = () =>{
    if(session){
      signOut()
      Router.push("http://localhost:3000/")
    }
  }
  const { data: session } = useSession();
  return (
    <Fragment>
      <Header>
        <Menu mode="horizontal" theme="dark" style={{justifyContent:"end"}}>
          <Menu.Item key="sign_up">
            {<ShoppingCartOutlined />}
            <Link href={`/Sign-Up`}>Cart</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link href={`/Login`}>My Orders</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <button style={{backgroundColor:"black",Color:"white"}} onClick={handleLogout}>Sign out</button>
          </Menu.Item>
          <Menu.Item key="contact">
          <Space wrap>
            <Dropdown.Button  icon={<UserOutlined />} onClick={handleButtonClick} overlay={menu}>
            Vivek
            </Dropdown.Button>
            </Space>
          </Menu.Item>
        </Menu>
      </Header>
    </Fragment>
  );
};
export default DashboardHeader;