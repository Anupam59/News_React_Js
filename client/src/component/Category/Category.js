import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../restAPI/ApiURL";

class Category extends Component {


    constructor(props) {
        super();
        this.state={
            category:props.Category,
            NewsData:[],
            length:"",
            NewsDataLength:""
        }
    }



    componentDidMount() {
        axios.get(ApiUrl.NewsListCategory(this.state.category)).then(response=>{
            this.setState({
                NewsData:response.data,
                length:response.data.length,
            })
        }).catch(error=>{

        })

        axios.get(ApiUrl.NewsListCategoryAll(this.state.category)).then(response=>{
            this.setState({
                NewsDataLength:response.data.length,
            })
        }).catch(error=>{

        })
    }


    LoadNext=()=>{
        let length = this.state.length;
        let category =this.state.category
        axios.get(ApiUrl.NewsListCategoryLength(category,length)).then(response=>{
            if (this.state.length<=this.state.NewsDataLength-12){
                this.setState({
                    NewsData:response.data,
                    length:length+12,
                })
                window.scroll(0,700)
            }else {
                this.setState({
                    NewsData:response.data,
                    length:length,
                })
            }

        }).catch(error=>{

        })

    }


    LoadPrevious=()=>{
        let length = this.state.length;
        let category =this.state.category
        axios.get(ApiUrl.NewsListCategoryLength(category,length)).then(response=>{
            if (this.state.length>12){
                this.setState({
                    NewsData:response.data,
                    length:length-12,
                })
                window.scroll(0,700)
            }else {

            }

        }).catch(error=>{

        })

    }

    render() {

        const MyList = this.state.NewsData;
        const MyView = MyList.map((NewsDataList,i)=>{
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
                    </Row>

                    <Button onClick={this.LoadPrevious} className="btn btn-primary p-2 mt-2">Previous</Button>
                    <Button onClick={this.LoadNext} className="btn btn-primary p-2 mt-2 mx-5">Next</Button>
                </Container>
            </Fragment>
        );
    }
}

export default Category;
