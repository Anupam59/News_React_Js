import React, {Component} from 'react';
import LogoTop from "../component/LogoTop/LogoTop";
import NavBar from "../component/NavBar/NavBar";
import FooterTop from "../component/FooterTop/FooterTop";
import Footer from "../component/Footer/Footer";
import NewsDetails from '../component/NewsDetails/NewsDetails';


class NewsDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            id: match.params.idnum,
            category: match.params.catname,
        }
    }

    componentDidMount() {
        
        window.scroll(0,0);
    }

    render() {

        const id = Number(this.state.id)
        return (
            <div>
                <LogoTop/>
                <NavBar/>
                <NewsDetails newsid={id} Category={this.state.category}/>
                {/*<Category Category={this.state.category}/>*/}
                <FooterTop/>
                <Footer/>
            </div>
        );
    }
}

export default NewsDetailsPage;
