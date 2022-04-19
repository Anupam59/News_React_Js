import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Image, Nav, Row} from "react-bootstrap";
import {BsFacebook, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs';
import axios from "axios";
import ApiUrl from "../../restAPI/ApiURL";
import {FacebookShareButton,FacebookShareCount} from "react-share";

class NewsDetails extends Component {

    constructor(props) {
        super();
        this.state={
            newsid:props.newsid,
            title:" ",
            category:" ",
            details:" ",
            image:" ",
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.NewsDetails(this.state.newsid)).then(response=>{
            this.setState({
                title:response.data[0]['title'],
                category:response.data[0]['category'],
                details:response.data[0]['details'],
                image:response.data[0]['image'],
            })
        }).catch(error=>{

        })
    }

    

    render() {
        const shareUrl = window.location.href;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xl={3} lg={3} md={4} sm={12}>
                            <div className="DetailsSideDiv">
                                <p>০১:২২ পিএম | ০৩ এপ্রিল, ২০২২</p>
                                <p>২০ চৈত্র ১৪২৮</p>
                                <p>২৯ শা'বান ১৪৪৩</p>
                            </div>
                            <div className="DetailsSideDiv">
                                <h3>বিনোদন ডেস্ক বার্তা২৪.কম</h3>
                            </div>
                            <div className="DetailsSideDiv">

                            <FacebookShareButton url={shareUrl}>
                            <Button size="sm">
                                <BsFacebook/> Shear <FacebookShareCount url={shareUrl} />
                            </Button>
                            </FacebookShareButton>

                            
                            </div>
                            <div className="DetailsSideDiv">
                                <Nav>
                                    <Nav.Item><Nav.Link><BsFacebook/></Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link><BsYoutube/></Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link><BsTwitter/></Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link><BsLinkedin/></Nav.Link></Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={8} sm={12}>
                            <h3 className="DetailsTitle">{this.state.title}</h3>
                            <Image className="DetailsImage" src={this.state.image}/>
                            <p className="DetailsDesc">{this.state.details}</p>
                        </Col>
                        <Col xl={3} lg={3} md={12} sm={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewsDetails;
