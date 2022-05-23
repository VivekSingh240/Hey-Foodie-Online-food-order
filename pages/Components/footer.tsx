import {FC, Fragment, memo} from "react";
import {Row, Col, Typography, Divider, Tooltip} from 'antd';
import {CustomDivider, CustomParagraph, CustomSearch} from "../styled-components";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {useTheme} from "@emotion/react";
import FooterImage from "../../public/Images/footer.png"
type Props = {};
import Image from "next/image";
import {useRouter} from "next/router";

const FooterComponent: FC<Props> = memo((Props: Props) => {
    const {Title, Text, Paragraph} = Typography;
    const screens = useBreakpoint();
    const {screen}:any = useTheme();
    const router = useRouter();

    return (
        <Fragment>
            <Row justify={'space-around'} align={'middle'} gutter={[16,{xxl: 32, xl: 32, lg: 32, md: 32, xs: 16, sm: 16}]}>
                <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24}>
                    <Row>
                        <Col span={24}>
                            <Title level={screen === "xs" || screen === "sm" ? 2 : null}>Hey Foodie</Title>
                        </Col>
                        <Col span={24}>
                            {screens.xs || screens.sm ?
                                <Row gutter={[16,0]}>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><CustomParagraph >Home</CustomParagraph></Col>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><CustomParagraph >About </CustomParagraph></Col>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><CustomParagraph >Science</CustomParagraph></Col>
                                    <Tooltip title={"Coming Soon"} >
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph key={"policy"}  >Privacy policy</Paragraph></Col>
                                    </Tooltip>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><CustomParagraph >Contact</CustomParagraph></Col>
                                    <Tooltip title={"Coming Soon"} >
                                        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph key={"condition"} >Terms & conditions</Paragraph></Col>
                                    </Tooltip>

                                </Row>
                                :
                                <Row gutter={[0,16]}>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph >Home</Paragraph></Col>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph >Contact</Paragraph></Col>
                                    <Tooltip title={"Coming Soon"} >
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph>Privacy policy</Paragraph></Col>
                                    </Tooltip>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph >Science</Paragraph></Col>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph >About</Paragraph></Col>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}><Paragraph>Terms & conditions</Paragraph></Col>
                                </Row>
                            }

                        </Col>
                    </Row>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <Row>
                       <Col span={24}>
                           <Paragraph>Get access to a new way to reach healthy life goals with your support
                               network.</Paragraph>
                       </Col>
                       <Col span={24}>
                           <CustomSearch
                               placeholder="Your email here"
                               allowClear
                               enterButton="Sign Up"
                               size="large"
                               // onSearch={onSearch}
                           />
                       </Col>
                    </Row>
                </Col>
                <Col span={24}>
                </Col>
                <Col span={24}>
                    <Row>
                        {screen === 'xs' || screen === "sm" ?
                            <Col span={24} style={{textAlign: 'center'}}><Image src={FooterImage}/></Col>
                          :
                            <Col span={24} style={{textAlign: screen === "xs" || screen === "sm" ? "center" : null}}> Visit <span style={{fontWeight: 'bold'}}>HeyFoodie</span> on</Col>
                        }
                        <Col span={24}><CustomDivider/></Col>
                    </Row>
                </Col>
            </Row>
            {/*<hr/>*/}
        </Fragment>
    );
})
export default FooterComponent;