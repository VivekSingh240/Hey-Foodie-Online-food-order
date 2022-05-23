import { Menu , Layout,Typography,Row,Col } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import Link from "next/link";


const {Header} = Layout;

 const Pageheader = () => {
   const {Title} = Typography
  return (
    <Fragment>
      <Header>
        <Menu style={{justifyContent:"end"}} mode="horizontal" theme="dark">
          <Menu.Item key="sign_up">
            {" "}
            <Link href={`/Sign-Up`}>Sign Up</Link>
          </Menu.Item>

          <Menu.Item key="login">
            <Link href={`/Login`}>Login</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="">Contact Us</a>
          </Menu.Item>
        </Menu>
      </Header>
    </Fragment>
  );
};
export default Pageheader;