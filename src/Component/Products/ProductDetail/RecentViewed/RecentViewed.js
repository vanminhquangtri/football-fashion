import React from "react";
import ProductsInfo from "../../../../Data/ProductInfo";
import {connect} from "react-redux";
import RecentViewedProduct from "./RecentViewedProduct";
const RecentViewed = (props) => {
    const {Viewed} = props.Store;
    let viewedProducts = [];
    Viewed.forEach((id) => {
        ProductsInfo.forEach((product) => {
            if (product.id === id){
                viewedProducts.push(product)
            }
        }) 
    })
    return (
        <div className="container-fluid also-container recent-viewed-container">
            <div className="row">
                <div className="col">
                    <div className="title">Sản phẩm vừa xem</div>
                    <div className="wrap outside">
                        {viewedProducts.map((product) => {
                                return (
                                    <RecentViewedProduct product={product} key={`recentviewed${product.id}`}/>
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