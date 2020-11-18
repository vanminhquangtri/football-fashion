import React from "react";
import ProductsInfo from "../../../../Data/ProductInfo";
import {connect} from "react-redux";
import TinySlider from "tiny-slider-react";
import AlsoLikeProduct from "./AlsoLikeProduct";
// defind number of slide base on view port
const itemsNumber = () => {
    var vw = window.innerWidth;
    if (vw < 768) {
        return 2;
    }
    if (vw >= 768) {
        return 3;
    }
}
const settings = {
    items: itemsNumber(),
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