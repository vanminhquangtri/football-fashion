import React from "react";
import ProductsInfo from "../../../../Data/ProductInfo";
import {connect} from "react-redux";
import TinySlider from "tiny-slider-react";
import AlsoLikeProduct from "./AlsoLikeProduct";
const settings = {
    items: 2,
    nav: false
}
const AlsoLike = (props) => {
    const {product} = props;
    const alsoLikeProduct = ProductsInfo.filter((p) => {
        return p.league === product.league && p.id !== product.id;
    })
    return (
        <div className="container-fluid also-container also-like">
            <div className="row">
                <div className="col">
                    <div className="wrap outside">
                        <div className="title">Sản phẩm cùng giải đấu</div>
                        <TinySlider settings={settings}>
                            {alsoLikeProduct.map((product) => {
                                return (
                                    <AlsoLikeProduct product={product} key={`also-like-product-${product.id}`}/>
                                )
                            })}
                        </TinySlider>
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
export default connect(mapStateToProps)(AlsoLike)