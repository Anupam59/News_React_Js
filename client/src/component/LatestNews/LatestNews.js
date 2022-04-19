import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import newsImage from "../../asset/images/resize.jpg";
import "../../asset/css/custom.css";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../restAPI/ApiURL";

class LatestNews extends Component {

    constructor() {
        super();
        this.state={
            NewsData:[]
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.LatestNews).then(response=>{
            this.setState({NewsData:response.data})
        }).catch(error=>{

        })
    }


    render() {

        const MyList = this.state.NewsData;
        const MyView = MyList.map((NewsDataList,i)=>{
            return <Col xl={3} lg={3} md={4} sm={6} className="NewsSmallBox">
                <Link className="LinkStyle" to={"/details/"+NewsDataList.category+"/"+NewsDataList.id}>
                    <Card>
                        <Image className="NewsImage" src={NewsDataList.image}/>
                        <Card.Body>
                            <p className="CatSmallName">{NewsDataList.category}</p>
                            <h3 className="NewsSmallTitle">{NewsDataList.title}</h3>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        })

        return (
            <Fragment>
                <Container className="Container">
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default LatestNews;
