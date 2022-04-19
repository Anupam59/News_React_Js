import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import newsImage from "../../asset/images/resize.jpg";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../restAPI/ApiURL";

class CategoryTop extends Component {


    constructor(props) {
        super();
        this.state={
            category:props.Category,
            id1:"",
            id2:"",
            id3:"",
            id4:"",
            id5:"",
            id6:"",
            id7:"",
            id8:"",
            category1:"", category2:"", category3:"", category4:"", category5:"", category6:"", category7:"", category8:"",
            title1:"", title2:"", title3:"", title4:"", title5:"", title6:"", title7:"", title8:"",
            sort_details1:"",
            image1:"", image2:"", image3:"", image4:"", image5:"", image6:"", image7:"", image8:"",
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.NewsListCategoryEight(this.state.category)).then(response=>{
            let JSONData= (response.data);
            this.setState({
                id1:JSONData[0]['id'],
                id2:JSONData[1]['id'],
                id3:JSONData[2]['id'],
                id4:JSONData[3]['id'],
                id5:JSONData[4]['id'],
                id6:JSONData[5]['id'],
                id7:JSONData[6]['id'],
                id8:JSONData[7]['id'],

                category1:JSONData[0]['category'],
                category2:JSONData[1]['category'],
                category3:JSONData[2]['category'],
                category4:JSONData[3]['category'],
                category5:JSONData[4]['category'],
                category6:JSONData[5]['category'],
                category7:JSONData[6]['category'],
                category8:JSONData[7]['category'],

                title1:JSONData[0]['title'],
                title2:JSONData[1]['title'],
                title3:JSONData[2]['title'],
                title4:JSONData[3]['title'],
                title5:JSONData[4]['title'],
                title6:JSONData[5]['title'],
                title7:JSONData[6]['title'],
                title8:JSONData[7]['title'],

                sort_details1:JSONData[0]['sort_details'],

                image1:JSONData[0]['image'],
                image2:JSONData[1]['image'],
                image3:JSONData[2]['image'],
                image4:JSONData[3]['image'],
                image5:JSONData[4]['image'],
                image6:JSONData[5]['image'],
                image7:JSONData[6]['image'],
                image8:JSONData[7]['image'],
            })
        }).catch(error=>{

        })
    }


    render() {
        return (
            <Fragment>
                <Container className="Container">

                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                            <Link className="LinkStyle" to={"/details/"+this.state.category1+"/"+this.state.id1}>
                                <Card className="CategoryBig">
                                    <Image className="NewsImage" src={this.state.image1}/>
                                    <Card.Body>
                                        <h3 className="NewsBigTitle">{this.state.title1}</h3>
                                        <p className="CatSmallNameRed">{this.state.category1}</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Link className="LinkStyle" to={"/details/"+this.state.category2+"/"+this.state.id2}>
                                        <Card className="CategoryBG">
                                            <Image className="NewsImage" src={this.state.image2}/>
                                            <Card.Body>
                                                <h3 className="NewsSmallTitle">{this.state.title2}</h3>
                                                <p className="CatSmallNameRed">{this.state.category2}</p>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Link className="LinkStyle" to={"/details/"+this.state.category3+"/"+this.state.id3}>
                                        <Card className="CategoryBG">
                                            <Image className="NewsImage" src={this.state.image3}/>
                                            <Card.Body>
                                                <h3 className="NewsSmallTitle">{this.state.title3}</h3>
                                                <p className="CatSmallNameRed">{this.state.category3}</p>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Link className="LinkStyle" to={"/details/"+this.state.category4+"/"+this.state.id4}>
                                        <Card className="CategoryBG">
                                            <Image className="NewsImage" src={this.state.image4}/>
                                            <Card.Body>
                                                <h3 className="NewsSmallTitle">{this.state.title4}</h3>
                                                <p className="CatSmallNameRed">{this.state.category4}</p>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="NewsSmallVideo">
                                    <Link className="LinkStyle" to={"/details/"+this.state.category5+"/"+this.state.id5}>
                                        <Card className="CategoryBG">
                                            <Image className="NewsImage" src={this.state.image5}/>
                                            <Card.Body>
                                                <h3 className="NewsSmallTitle">{this.state.title5}</h3>
                                                <p className="CatSmallNameRed">{this.state.category5}</p>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CategoryTop;
