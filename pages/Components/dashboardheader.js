import { Menu , Layout } from "antd";
import React from 'react';
// import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import Link from "next/link";
import {Dropdown, Button, message, Space, Tooltip } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useSession, signIn, signOut } from "next-auth/react"
import Router  from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';
const {Header} = Layout;

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

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
      Router.push("http://localhost:3000/")
      signOut()
    }
  }
  // console.log("user data-----",GoogleAuth.currentUser.get())
  // const { user, error, isLoading } = useUser();
  const { data: session } = useSession();
  return (
    <Fragment>
      <Header>
        <Menu mode="horizontal" theme="dark" style={{justifyContent:"end"}}>
          <Menu.Item key="Home">
            {<ShoppingCartOutlined />}
            <Link href={`/DashboardPage`}>Home</Link>
          </Menu.Item>
          <Menu.Item key="MyOrder">
            <Link href={`/Login`}>My Orders</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <button style={{backgroundColor:"black",Color:"white"}} onClick={()=> signOut()}>Sign out</button>
          </Menu.Item>
          <Menu.Item key="contact">
          <Space wrap>
            <Dropdown.Button  icon={<UserOutlined />} onClick={handleButtonClick} overlay={menu}>
            Welcome
            </Dropdown.Button>
            </Space>
          </Menu.Item>
        </Menu>
      </Header>
    </Fragment>
  );
};
export default DashboardHeader;