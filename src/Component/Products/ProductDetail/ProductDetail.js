// direct child of RouterURL
import React, {useEffect} from 'react';
import urlSlug from "url-slug";
import {connect} from "react-redux";
import ProductsInfo from '../../../Data/ProductInfo';
import ProductSlideshow from './ProductSlideshow';
import ProductButton from './ProductButton';
import AddToCart from '../../ShoppingCart/AddToCart';
import ProductOtherInfo from './ProductOtherInfo';
import AlsoLike from './AlsoLike';
const ProductDetail = (props) => {
    const nameSlug = props.match.params.slug;
    // find the product need to be shown base on name
    const Product = ProductsInfo.find((product) => {
        return urlSlug(product.name) === nameSlug
    });
    useEffect(() => {
        // scroll to top on page load (only first render)
        window.scrollTo(0, 0)
    },[])
    return (
        <section className="product-detail">
            <ProductButton product={Product}/>
            <ProductSlideshow product={Product}/>
            <AddToCart product={Product}/>
            <ProductOtherInfo product={Product}/>
            {/* <AlsoLike product={Product}></AlsoLike> */}
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ProductDetail)