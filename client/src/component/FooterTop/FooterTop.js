import React, {Component, Fragment} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import LogoImage from "../../asset/images/logo.svg";
import GooglePlay from "../../asset/images/google-play-badge.svg";
import AppStore from "../../asset/images/app-store-badge.png";

class FooterTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="ContainerFooterBg">
                    <Container>
                        <Row>
                            <Col xl={4} lg={4} md={12} sm={12}>
                                <Image src={LogoImage}/>
                                <p className="NewsSmallDesc">Bart24.com is a digital news outlet</p>
                                <p className="NewsSmallDesc">রোড#০৪, বাড়ি#১০, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ।</p>
                                <p className="CatSmallNameRed">এডিটর ইন চিফ</p>
                                <p className="NewsSmallDesc">আলমগীর হোসেন</p>
                                <p className="NewsSmallDesc">editor@barta24.com</p>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12}>
                                <h3 className="mb-4">নিউজরুম</h3>
                                <p className="NewsSmallDesc">+৮৮০ ১৭৩ ০৭১ ৭০২৫</p>
                                <p className="NewsSmallDesc">+৮৮০ ১৭৩ ০৭১ ৭০২৬</p>
                                <p className="NewsSmallDesc">+৮৮০ ৯৬১ ৩৩২ ২৭৮২</p>
                                <h3 className="mb-4">মার্কেটিং ও সেলস</h3>
                                <p className="NewsSmallDesc">+৮৮০ ১৭১ ৩৪২ ৩৩২২</p>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={12}>
                                <h3 className="mb-4">মার্কেটিং ও সেলস</h3>
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={6}>
                                        <Image className="AppImage" src={GooglePlay}/>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={6}>
                                        <Image className="AppImage" src={AppStore}/>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default FooterTop;
