import React, {useEffect} from "react";
import {Row,Col} from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import Delivery from "../../public/Images/delivery.png"
import {CustomCol1,CustomText1} from "../styled-components.tsx";

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
                </Row>
            </Col> 
        </Row>
    )
}

export default SuccessPayment;
