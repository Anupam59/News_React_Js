import React, {Component, Fragment} from 'react';
import {Container, Image} from "react-bootstrap";
import LogoImage from "../../asset/images/logo.svg";
import "../../asset/css/LogoCss.css";

class LogoTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="LogoIcon">
                    <Image src={LogoImage}/>
                </Container>
            </Fragment>
        );
    }
}

export default LogoTop;
