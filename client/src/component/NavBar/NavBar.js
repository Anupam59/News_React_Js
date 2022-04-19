import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import "../../asset/css/custom.css";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <Fragment>

                <Navbar collapseOnSelect sticky="top" expand="xl" className="NabBar">
                        <Container className="NabBarBody">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="NavToggle"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link className="NavItem" as={Link} to='/'>বার্তা</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/video'>ভিডিও</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/play'>খেলা</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/politics'>রাজনীতি</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/ecommerce'>অর্থনীতি</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/entertainment'>বিনোদন</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/art-literature'>শিল্প-সাহিত্য</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/category/international'>আন্তর্জাতিক</Nav.Link>
                                    <Nav.Link className="NavItem" as={Link} to='/'>অন্যান্য</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </Fragment>
        );
    }
}

export default NavBar;
