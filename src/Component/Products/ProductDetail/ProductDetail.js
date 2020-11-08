// direct child of RouterURL
import React from 'react';
import urlSlug from "url-slug";
import {connect} from "react-redux";
import ProductsInfo from '../../../Data/ProductInfo';
import ProductSlideshow from './ProductSlideshow';
const ProductDetail = (props) => {
    const nameSlug = props.match.params.slug;
    // find the product need to be shown base on name
    const Product = ProductsInfo.find((product) => {
        return urlSlug(product.name) === nameSlug
    });
    return (
        <section className="product-detail">
            <ProductSlideshow product={Product}/>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ProductDetail)