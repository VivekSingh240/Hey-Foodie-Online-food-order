import React, {useEffect} from "react";
import {Row,Col} from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import Delivery from "../../public/Images/delivery.png"
import {CustomCol1,CustomText1} from "../styled-components.tsx";
import Link from "next/link";
import styled from "@emotion/styled";

const NavStyle = styled.nav`
width:100%;
text-align:center;
padding:5px;
font-size:22px;
font-weight:600;
`;
const SuccessPayment = ()=>{
   const router = useRouter();
    useEffect(()=>{


    }, [router.route])

    return (
        <Row style={{marginTop:"50px"}} align="middle" justify="center">
            <Col span={8}>
                <Row>
                    <Col span={24}><Image src={Delivery} /></Col>
                    <CustomCol1 span={24}> Payment Successful </CustomCol1>
                    <CustomText1 span={24}> Your Order Placed Successfully</CustomText1>
                    <CustomCol1 span={24}>Thank You Visit Again</CustomCol1>
                    <NavStyle><Link href={`Components/MyOrder`}>My Orders</Link></NavStyle>
                </Row>
            </Col> 
        </Row>
    )
}

export default SuccessPayment;
