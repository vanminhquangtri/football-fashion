// direct child of RouterURL
import React, {useEffect} from 'react';
import urlSlug from "url-slug";
import {connect} from "react-redux";
import ProductsInfo from '../../../Data/ProductInfo';
import ProductSlideshow from './ProductSlideshow';
import ProductButton from './ProductButton';
import AddToCart from '../../ShoppingCart/AddToCart';
import ProductOtherInfo from './ProductOtherInfo';
import AlsoLike from './AlsoLike/AlsoLike';
import Outstanding from './Outstanding/Outstanding';
const ProductDetail = (props) => {
    const nameSlug = props.match.params.slug;
    // find the product need to be shown base on name
    const Product = ProductsInfo.find((product) => {
        return urlSlug(product.name) === nameSlug
    });
    useEffect(() => {
        // scroll to top on page load (only first render)
        window.scrollTo(0, 0);
    },[Product]);
    return (
        <section className="product-detail">
            <ProductButton product={Product} key={`product-button-${Product.id}`}/>
            <ProductSlideshow product={Product} key={`product-slideshow-${Product.id}`}/>
            <AddToCart product={Product} key={`add-to-cart-${Product.id}`}/>
            <ProductOtherInfo product={Product} key={`product-other-info-${Product.id}`}/>
            <AlsoLike product={Product} key={`also-like-${Product.id}`}/>
            <Outstanding product={Product} key={`outstanding-${Product.id}`}/>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ProductDetail)