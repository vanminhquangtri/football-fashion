// direct child of ProductDetail, include some product that is same league with current product
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import ProductsInfo from "../../../Data/ProductInfo";
import ProductLayout from "../ProductLayout/ProductLayout";
import TinySlider from "tiny-slider-react";
const settings = {
    items: 2,
    nav: false,
}

const AlsoLike = (props) => {
    const {product} = props;
    // find products with same league
    const alsoLikeProducts = ProductsInfo.filter((p) => {
        return p.league === product.league && p.id !== product.id;
    });
    return (
        <section className="display-homepage product-detail-also-like">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-title">
                        <div className="background-image"></div>
                        <span className="title-text">
                            <FontAwesomeIcon icon={faHandPointRight} className="icon"/>
                            SẢN PHẨM CÙNG GIẢI ĐẤU
                            <div className="football-image"></div>
                        </span>
                    </div>
                    <div className="col also-like-slide">
                        <TinySlider settings={settings}>
                            {alsoLikeProducts.map((product) => {
                                return (
                                    <ProductLayout product={product} key={product.id}/>
                                )
                            })}
                        </TinySlider>
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
export default connect(mapStateToProps)(AlsoLike)