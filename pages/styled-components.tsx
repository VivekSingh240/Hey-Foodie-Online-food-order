import styled from "@emotion/styled";
import {Button,Col, Divider, Input, Modal, Row, Select,Typography} from "antd";
const {Title, Text, Paragraph} = Typography;
const {Search} = Input;
export const CustomCol = styled(Col)`
  font-weight: 600;
  margin-top:20px;
  font-size: 24px;
  color:whitesmoke;
  text-align:center;
  font-family:serif;
  `
  export const CustomText = styled(Col)`
  font-weight: 400;
  font-size: 16px;
  color:whitesmoke;
  text-align:center;
  font-family:serif;
  display:flex;
  justify-content:center;
  `

  export const CustomCol1 = styled(Col)`
  font-weight: 600;
  margin-top:20px;
  font-size: 24px;
  text-align:center;
  font-family:serif;
  `
  export const CustomText1 = styled(Col)`
  font-weight: 400;
  font-size: 16px;
  text-align:center;
  font-family:serif;
  display:flex;
  justify-content:center;
  `


  
export const CustomSearch = styled(Search)`
border:;
border-radius: 70px;
.ant-input-affix-wrapper.ant-input-affix-wrapper-lg {
border:1px solid #000000;
border-radius: 70px 0px 0px 70px !important;
}
button.ant-btn.ant-btn-primary.ant-btn-lg.ant-input-search-button{
border-radius: 0px 70px 70px 0px;
border:1px solid #000000;
background: #FCF06A;
font-weight: 600;
font-size: 16px;
color: #1D1B1C;
}
`
export const CustomDivider = styled(Divider)`
border: 1px solid #C0CCE4;
`
export const CustomParagraph = styled(Paragraph)`
cursor: pointer;
`