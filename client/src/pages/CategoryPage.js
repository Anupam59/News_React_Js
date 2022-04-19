import React, {Component, Fragment} from 'react';
import LogoTop from "../component/LogoTop/LogoTop";
import NavBar from "../component/NavBar/NavBar";
import Category from "../component/Category/Category";
import FooterTop from "../component/FooterTop/FooterTop";
import Footer from "../component/Footer/Footer";
import {Col, Container, Row} from "react-bootstrap";
import CategoryTop from "../component/Category/CategoryTop";
import CategoryLoad from "../component/Category/CategoryLoad";


class CategoryPage extends Component {

    constructor({match}) {
        super();
        this.state={
            category: match.params.catname,
        }
    }

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
                            <CategoryTop Category={this.state.category}/>
                            <CategoryLoad Category={this.state.category}/>
                        </Col>
                        <Col lg={3} md={3} sm={12}>

                        </Col>
                    </Row>
                </Container>
                <FooterTop/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CategoryPage;
