import React, {Component, Fragment} from 'react';
import LogoTop from "../component/LogoTop/LogoTop";
import NavBar from "../component/NavBar/NavBar";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import TopNews from "../component/TopNews/TopNews";
import LatestNews from "../component/LatestNews/LatestNews";
import NewsVideos from "../component/NewsVideos/NewsVideos";
import PoliticsPart from "../component/PoliticsPart/PoliticsPart";
import PlayPart from "../component/PlayPart/PlayPart";
import EntertainmentPart from "../component/EntertainmentPart/EntertainmentPart";
import FooterTop from "../component/FooterTop/FooterTop";
import Footer from "../component/Footer/Footer";
import {Route, Switch} from "react-router";

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>
                <LogoTop/>
                <NavBar/>
                <Container>
                    <Row>
                        <Col lg={9} md={9} sm={12} className="ContainerFull">
                            <TopNews/>
                            <LatestNews/>
                            <NewsVideos/>
                        </Col>
                        <Col lg={3} md={3} sm={12}>

                        </Col>
                    </Row>
                </Container>
                <PoliticsPart/>
                <PlayPart/>
                <EntertainmentPart/>
                <FooterTop/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
