import React, {useEffect} from "react";
import {Row} from "antd";
import { useRouter } from "next/router";


const SuccessPayment = ()=>{
   const router = useRouter();
    useEffect(()=>{


    }, [router.route])

    return (
        <Row>

         Khana Khredne ke liye danyvad

        </Row>
    )
}

export default SuccessPayment
