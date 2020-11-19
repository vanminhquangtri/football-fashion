// direct child of Product Detail, containing product of other leagues
import React from "react";
import ProductsInfo from "../../../../Data/ProductInfo";
import TinySlider from "tiny-slider-react";
import OutstandingProduct from "./OutstandingProduct";
const settings = {
    items: 2,
    nav: false,
    responsive: {
        768: {
          items: 3
        }
    }
}
const Outstanding = (props) => {
    const {product} = props;
    const outstandingProduct = ProductsInfo.filter((p) => {
        return p.league !== product.league && p.type === "shirt";
    })
    return (
        <div className="container-fluid also-container outstanding">
            <div className="row">
                <div className="col">
                    <div className="wrap outside">
                        <div className="title">Xem sản phẩm nổi bật</div>
                        <TinySlider settings={settings}>
                            {outstandingProduct.map((product) => {
                                return (
                                    <OutstandingProduct product={product} key={`outstanding-product-${product.id}`}/>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Outstanding