import React, {useEffect} from "react";
import {Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import About from "../About/About";
import Checkout from "../Checkout/Checkout";
import Homepage from "../Homepage/Homepage";
import Leagues from "../Leagues/Leagues";
import ManageOrder from "../ManageOrder/ManageOrder";
import ProductDetail from "../Products/ProductDetail/ProductDetail";
import Promotion from "../Promotion/Promotion";
import ShoppingCartDetail from "../ShoppingCart/ShoppingCartDetail/ShoppingCartDetail";
const RouterURL = (props) => {
    const { match, location, history } = props;
    console.log(location.pathname);
    useEffect(() => {
        const footer = document.querySelector("section.footer")
        if (location.pathname === "/leagues"){
            footer.style.display = "none";
        } else {
            footer.style.display = "block";
        }
    })
    return (
        <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/product-detail/:slug" exact component={ProductDetail}></Route>
            <Route path="/leagues" exact component={Leagues}></Route>
            <Route path="/promotion" exact component={Promotion}></Route>
            <Route path="/shopping-cart" exact component={ShoppingCartDetail}></Route>
            <Route path="/check-out" exact component={Checkout}></Route>
            <Route path="/manage-order" exact component={ManageOrder}></Route>
            <Route path="/contact" exact component={About}></Route>
            <Route component={Homepage}></Route>
        </Switch>
    );
};

export default withRouter(RouterURL);