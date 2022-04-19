import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import shadboichitro from "../../asset/images/shadboichitro.png";

class NewsVideos extends Component {
    render() {
        return (
            <Fragment>
                <Container className="Container">
                    <Image className="TitlePartImage" src={shadboichitro}/>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                            <Card className="NewsVideoBig">
                                <div>
                                    <video className="VideoItem" controls autoPlay>
                                        <source src="https://www.youtube.com/watch?v=-_2Kw3-Mx3g" type="video/mp4"/>
                                    </video>
                                </div>
                                <Card.Body>
                                    <p className="CatNewsVideoName">স্বাদ বৈচিত্র্য</p>
                                    <h3 className="NewsVideoTitle">প্রথম রোজায় তীব্র গ্যাস সংকটে রাজধানীবাসী!</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Card className="NewsVideoBG">
                                        <div>
                                            <video className="VideoItem" controls autoPlay>
                                                <source src="https://www.youtube.com/watch?v=-_2Kw3-Mx3g" type="video/mp4"/>
                                            </video>
                                        </div>
                                        <Card.Body>
                                            <p className="CatNewsVideoName">স্বাদ বৈচিত্র্য</p>
                                            <h3 className="NewsVideoTitle">প্রথম রোজায় তীব্র গ্যাস সংকটে রাজধানীবাসী!</h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Card className="NewsVideoBG">
                                        <div>
                                            <video className="VideoItem" controls autoPlay>
                                                <source src="https://www.youtube.com/watch?v=-_2Kw3-Mx3g" type="video/mp4"/>
                                            </video>
                                        </div>
                                        <Card.Body>
                                            <p className="CatNewsVideoName">স্বাদ বৈচিত্র্য</p>
                                            <h3 className="NewsVideoTitle">প্রথম রোজায় তীব্র গ্যাস সংকটে রাজধানীবাসী!</h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Card className="NewsVideoBG">
                                        <div>
                                            <video className="VideoItem" controls autoPlay>
                                                <source src="https://www.youtube.com/watch?v=-_2Kw3-Mx3g" type="video/mp4"/>
                                            </video>
                                        </div>
                                        <Card.Body>
                                            <p className="CatNewsVideoName">স্বাদ বৈচিত্র্য</p>
                                            <h3 className="NewsVideoTitle">প্রথম রোজায় তীব্র গ্যাস সংকটে রাজধানীবাসী!</h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Card className="NewsVideoBG">
                                        <div>
                                            <video className="VideoItem" controls autoPlay>
                                                <source src="https://www.youtube.com/watch?v=-_2Kw3-Mx3g" type="video/mp4"/>
                                            </video>
                                        </div>
                                        <Card.Body>
                                            <p className="CatNewsVideoName">স্বাদ বৈচিত্র্য</p>
                                            <h3 className="NewsVideoTitle">প্রথম রোজায় তীব্র গ্যাস সংকটে রাজধানীবাসী!</h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewsVideos;
