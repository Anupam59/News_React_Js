import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import NewsDetailsLoad from "../component/NewsDetails/NewsDetailsLoad";
import CategoryPage from "../pages/CategoryPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props)=><HomePage{...props} key={Date.now()}/>}/>
                    <Route exact path="/details/:catname/:idnum" render={(props)=><NewsDetailsPage{...props} key={Date.now()}/>}/>
                    <Route exact path="/category/:catname" render={(props)=><CategoryPage{...props} key={Date.now()}/>}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
