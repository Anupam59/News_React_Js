import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import newsImage from "../../asset/images/resize.jpg"
import "../../asset/css/custom.css";
import {Link} from "react-router-dom";
import ApiUrl from "../../restAPI/ApiURL";
import axios from "axios";

class TopNews extends Component {

    constructor() {
        super();
        this.state={
            id1:"",
            id2:"",
            category1:"",
            category2:"",
            title1:"",
            title2:"",
            sort_details1:"",
            image1:"",
            image2:"",
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.TopLatestNews).then(response=>{
            let JSONData= (response.data);
            this.setState({
                id1:JSONData[0]['id'],
                id2:JSONData[1]['id'],

                category1:JSONData[0]['category'],
                category2:JSONData[1]['category'],

                title1:JSONData[0]['title'],
                title2:JSONData[1]['title'],

                sort_details1:JSONData[1]['sort_details'],

                image1:JSONData[0]['image'],
                image2:JSONData[1]['image'],
            })
        }).catch(error=>{

        })
    }

    render() {

        return (
            <Fragment>
                <Container className="Container">
                    <Row>
                        <Col xl={9} lg={9} md={8} sm={6} className="TopNewsBg">
                            <Link className="LinkStyle" to={"/details/"+this.state.category1+"/"+this.state.id1}>
                                <Row>
                                    <Col xl={5} lg={5} md={12} sm={12}>
                                        <p className="CategoryName">{this.state.category1}</p>
                                        <h3 className="NewsTitle">{this.state.title1}</h3>
                                        <p className="NewsDesc">{this.state.sort_details1}</p>
                                    </Col>
                                    <Col xl={7} lg={7} md={12} sm={12} className="m-0 p-0">
                                        <Image className="NewsImage" src={this.state.image1}/>
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={3} lg={3} md={4} sm={6} className="NewsSmallBox">
                            <Link className="LinkStyle" to={"/details/"+this.state.category2+"/"+this.state.id2}>
                                <Card>
                                    <Image className="NewsImage" src={this.state.image2}/>
                                    <Card.Body>
                                        <p className="CatSmallName">{this.state.category2}</p>
                                        <h3 className="NewsSmallTitle">{this.state.title2}</h3>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TopNews;
