import React from "react";
import {Switch, Route} from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import ProductDetail from "../Products/ProductDetail/ProductDetail";
const RouterURL = () => {
    return (
        <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/:slug" exact component={ProductDetail}></Route>
            <Route component={Homepage}></Route>
        </Switch>
    );
};

export default RouterURL;