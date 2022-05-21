import {Menu,Link,Header} from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

const Pageheader = () => {
    return(
        <>
             <Header >
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="sign_up"> <Link href={`/Sign-Up`}>Sign Up</Link></Menu.Item>

            <Menu.Item key="login">
              <Link href={`/Login`}>Login</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="">Contact Us</a>
            </Menu.Item>
          </Menu>
         
        </Header>
     </>
    )
   
 
    };
    export default Pageheader