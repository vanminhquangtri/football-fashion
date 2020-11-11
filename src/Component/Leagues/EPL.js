import React, {useState} from "react";
import ProductsInfo from "../../Data/ProductInfo";
import LoadProducts from "../GeneralModules/LoadProducts";
import ProductLayout from "../Products/ProductLayout/ProductLayout";
console.log(ProductsInfo);

const EPL = (props) => {
    const [state, setState] = useState({
        loaded_product_number: 4
    });
    const {loaded_product_number} = state;
    const eplProduct = ProductsInfo.filter((product) => {
        return product.league === "Premier League";
    });
    let loadedProducts = [];
    eplProduct.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    })
    return (
        <div className="epl">
            <div className="each-league-title">Ngoại Hạng Anh<br/>giải đấu hấp dẫn nhất hành tinh</div>
            <div className="leagues-products-layout">
                <div className="container-fluid">
                    <div className="row">
                    {loadedProducts.map((product) => {
                        return (
                            <ProductLayout product={product} key={product.id}/>
                        )
                    })}
                    </div>
                </div>
                <div className="control-loaded-quantity">
                    <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, eplProduct.length, setState)}}>
                        {loaded_product_number < eplProduct.length ? "Xem thêm" : "Ẩn bớt"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EPL;