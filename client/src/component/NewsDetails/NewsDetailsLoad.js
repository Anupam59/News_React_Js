import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Image, Nav, Row} from "react-bootstrap";
import {BsFacebook, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs';
import axios from "axios";
import ApiUrl from "../../restAPI/ApiURL";
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NewsDetailsLoad extends Component {

    constructor(props) {
        super();
        this.state={
            newsid:props.newsid,
            category:props.Category,
            NewsData:[],
            length:1,
            fullLength:""

        }
    }

    componentDidMount() {

        axios.get(ApiUrl.NewsDetailsLoad(this.state.newsid)).then(response=>{
            this.setState({
                NewsData:response.data,
                fullLength:response.data.length,
            })
            
        }).catch(error=>{

        })
    
    }



    onScroll=()=>{
        const Length = this.state.length;
        if (window.scrollY>100){
            if (5>Length){
                this.setState({
                    length:Length+1,
                })
            }
        }
        else if (window.scrollY<100){
            if (5>Length){
            this.setState({
                length:Length+1,
            })
        }
        }
    }




    LoadPage=()=>{

        const FullLength = this.state.fullLength;
        let Length = this.state.length;

        if (FullLength>Length){
            this.setState({
                length:Length+1,
                newsid:this.state.newsid+1,
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
            return <Col xl={9} lg={9} md={12} sm={12}>
                <Row>
                    <Col xl={4} lg={4} md={4} sm={12}>
                        <div className="DetailsSideDiv">
                            <p>০১:২২ পিএম | ০৩ এপ্রিল, ২০২২</p>
                            <p>২০ চৈত্র ১৪২৮</p>
                            <p>২৯ শা'বান ১৪৪৩</p>
                        </div>
                        <div className="DetailsSideDiv">
                            <h3>বিনোদন ডেস্ক বার্তা২৪.কম</h3>
                        </div>
                        <div className="DetailsSideDiv">
                            <Button size="sm"><BsFacebook/> Shear 122</Button>
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
                    <Col xl={8} lg={8} md={8} sm={12}>
                        <h3 className="DetailsTitle">{NewsDataList.title}</h3>
                        <Image className="DetailsImage" src={NewsDataList.image}/>
                        <p className="DetailsDesc">{NewsDataList.details}</p>
                    </Col>
                </Row>
            </Col>

        })


        return (
            <Fragment>
                <Container>
                    <Row>
                        {MyView}
                        <Button onClick={this.LoadPage}><Link to={"/details/"+this.state.category+"/"+this.state.newsid}>Load More</Link></Button>
                        <Col xl={3} lg={3} md={12} sm={12}>

                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
            </Fragment>
        );
    }
}

export default NewsDetailsLoad;
