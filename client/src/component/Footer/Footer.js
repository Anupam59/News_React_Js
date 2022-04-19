import React, {Component, Fragment} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="FooterBg">
                    <Container>
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={12}>
                                <p className="FooterText">© বার্তা২৪.কম সকল অধিকার সংরক্ষিত ২০১৮-২০২২।</p>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12}>
                                <Nav className="justify-content-end">
                                    <Nav.Item><Nav.Link className="FooterNavItem">Active</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link className="FooterNavItem">Active</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link className="FooterNavItem">Active</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link className="FooterNavItem">Active</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link className="FooterNavItem">Active</Nav.Link></Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
