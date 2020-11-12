import React, {useEffect} from "react";
import ProductsInfo from "../../../../Data/ProductInfo";
import {connect} from "react-redux";
import RecentViewedProduct from "./RecentViewedProduct";
import urlSlug from "url-slug";
const RecentViewed = (props) => {
    console.log("recent viewed render");
    const {nameSlug} = props;
    // find the product need to be shown base on name
    const Product = ProductsInfo.find((product) => {
        return urlSlug(product.name) === nameSlug
    });
    // get ID from cookie when component mount
    console.log("recent viewed before effect document.cookie: " + document.cookie);
    const cookies = decodeURIComponent(document.cookie).split(";");
    const recentViewedProductID = [];
    cookies.forEach((cookie) => {
        const id = cookie.trim().split("=");
        recentViewedProductID.push(id[1])
    });
    // find the recent viewed product based on ID  
    let viewedProducts = [];
    recentViewedProductID.forEach((id) => {
        ProductsInfo.forEach((product) => {
            if (product.id === id){
                viewedProducts.push(product)
            }
        }) 
    });
    useEffect(() => {
        // create cookie (before component unmount)
        const cookieName = "viewed-product-id";
        const cookieValue = encodeURIComponent(Product.id);
        document.cookie = `${cookieName}=${cookieValue}; path=/product-detail; max-age=${60 * 60 * 24 * 2}`;
        console.log("recent viewed after effect document.cookie: " + document.cookie);
    },[Product.id])
    return (
        <div className="container-fluid also-container recent-viewed-container">
            <div className="row">
                <div className="col">
                    <div className="title">Sản phẩm vừa xem</div>
                    <div className="wrap outside">
                        {viewedProducts.map((product) => {
                                return (
                                    <RecentViewedProduct product={product} key={`recentviewedproduct${product.id}`}/>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
                    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(RecentViewed)