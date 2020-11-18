import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartbeat} from "@fortawesome/free-solid-svg-icons";
import ProductsInfo from "../../../Data/ProductInfo";
import LoadProducts from "../../GeneralModules/LoadProducts";
import {connect} from "react-redux";
import ProductLayout from "../../Products/ProductLayout/ProductLayout";

const TopSales = (props) => {
    const [state, setState] = useState({
        loaded_product_number: 6
    })
    const {loaded_product_number} = state;
    // find products with property top_viewed true
    const topSalesProducts = ProductsInfo.filter((product) => {
        return product.top_sales === true;
    });
    // return a number of top viewed product equal to loaded_product_number;
    let loadedProducts = [];
    topSalesProducts.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    }) 
    return (
        <section className="display-homepage top-sales">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-title">
                        <div className="background-image"></div>
                        <span className="title-text">
                            <FontAwesomeIcon icon={faHeartbeat} className="icon"/>
                            SẢN PHẨM ĐANG BÁN CHẠY
                            <div className="football-image"></div>
                        </span>
                    </div>
                    {loadedProducts.map((product) => {
                        return (
                            /* only render product having property top_sales true, each product is a col */
                            <ProductLayout product={product} key={product.id}/>
                        )
                    })}
                    <div className="control-loaded-quantity">
                        <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, topSalesProducts.length, setState)}}>
                            {loaded_product_number < topSalesProducts.length ? "Xem thêm" : "Ẩn bớt"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(TopSales)