import React from "react";
import {Switch, Route} from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Leagues from "../Leagues/Leagues";
import ProductDetail from "../Products/ProductDetail/ProductDetail";
const RouterURL = () => {
    return (
        <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/product-detail/:slug" exact component={ProductDetail}></Route>
            <Route path="/leagues" exact component={Leagues}></Route>
            <Route component={Homepage}></Route>
        </Switch>
    );
};

export default RouterURL;