import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../restAPI/ApiURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CategoryLoad extends Component {

    constructor(props) {
        super();
        this.state={
            category:props.Category,
            NewsData:[],
            length:8,
            fullLength:""
        }
    }

    componentDidMount() {

        axios.get(ApiUrl.NewsListCategoryAll(this.state.category)).then(response=>{
            this.setState({
                NewsData:response.data,
                fullLength:response.data.length,
            })
        }).catch(error=>{

        })

    }


    LoadMore=()=>{
        const Length = this.state.length;
        const FullLength = this.state.fullLength;
        if (FullLength>Length){
            this.setState({
                length:Length+6,
            })
        }else {
            toast.warn("No More Data", {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }



    render() {
        const MyList = this.state.NewsData;
        const Length = this.state.length;
        const MyView = MyList.slice(0,Length).map((NewsDataList,i)=>{
            return <Col xl={6} lg={6} md={6} sm={12} className="CategoryDiv">
                <Link className="LinkStyle" to={"/details/"+NewsDataList.category+"/"+NewsDataList.id}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6}>
                            <Image className="NewsImage" src={NewsDataList.image}/>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6}>
                            <p className="CatSmallNameRed">{NewsDataList.category}</p>
                            <h3 className="NewsSmallTitle">{NewsDataList.title}</h3>
                        </Col>
                    </Row>
                </Link>
            </Col>

        })

        return (
            <Fragment>
                <Container>
                    <h3 className="TitlePartText">বিনোদন এর আরও খবর</h3>
                    <Row>
                        {MyView}
                        <Button onClick={this.LoadMore} className="btn btn-primary p-2 mt-2">Load More</Button>
                    </Row>
                    <ToastContainer />
                </Container>
            </Fragment>
        );
    }
}

export default CategoryLoad;
