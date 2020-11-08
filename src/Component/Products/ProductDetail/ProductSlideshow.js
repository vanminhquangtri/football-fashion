// direct child of ProductDetail
import React, {useEffect} from 'react';
import TinySlider from "tiny-slider-react";

const ProductSlideshow = (props) => {
    const {product} = props;
    useEffect(() => {
        // use all images of product for nav button
        const navBtns = document.querySelectorAll(".slide-show .tns-nav button");
        navBtns.forEach((btn, index) => {
            btn.style.backgroundImage = `url(${product.slide_image[index].default})`
        })
    })
    return (
        <div className="container-fluid slide-show">
            <div className="row">
                <div className="col">
                    <TinySlider>
                        {product.slide_image.map((image) => {
                            return (
                                <div className="slide-item" key={image.default}>
                                    <img alt="product-slide-show" src={image.default}/>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
    );
};

export default ProductSlideshow;