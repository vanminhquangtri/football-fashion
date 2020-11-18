// direct child of ProductDetail
/** @jsxRuntime classic */
/**@jsx jsx */
import {useEffect} from 'react';
import {jsx, css} from "@emotion/core";
const ProductSlideshow = (props) => {
    const {product} = props;
    useEffect(() => {
        const carouselItems = document.querySelector(".carousel-item");
        carouselItems.className = "carousel-item active";
        const carouselIndicators = document.querySelector(".carousel-indicators li");
        carouselIndicators.className = carouselIndicators.className + " active";
    },[])
    return (
        <div className="container-fluid slide-show">
            <div className="row">
                <div className="col">
                    <div id="ProductDetailTopSlide" className="carousel slide" data-ride="carousel" data-interval={false}>
                        <div className="carousel-inner">
                            {product.slide_image.map((image, index) => {
                                return (
                                    <div className="carousel-item" key={image.default}>
                                        <img src={image.default} className="d-block w-100" alt="top-slide"/>
                                    </div>
                                    )
                            })}
                        </div>
                        <ol className="carousel-indicators">
                            {product.slide_image.map((image, index) => {
                                return (
                                        <li 
                                            data-target="#ProductDetailTopSlide" 
                                            data-slide-to={index} 
                                            key={image.default}
                                            css={css`
                                                background-image: url(${product.slide_image[index].default})
                                            `}
                                        />
                                    )
                            })}
                        </ol>
                        <a className="carousel-control-prev" href="#ProductDetailTopSlide" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#ProductDetailTopSlide" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSlideshow;