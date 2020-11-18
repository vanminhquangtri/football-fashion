import React, {useState} from "react";
import ProductsInfo from "../../Data/ProductInfo";
import LoadProducts from "../GeneralModules/LoadProducts";
import ProductLayout from "../Products/ProductLayout/ProductLayout";

const Ligue1 = (props) => {
    const [state, setState] = useState({
        loaded_product_number: 6
    });
    const {loaded_product_number} = state;
    const Ligue1Product = ProductsInfo.filter((product) => {
        return product.league === "Ligue 1";
    });
    let loadedProducts = [];
    Ligue1Product.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    })
    return (
        <div className="leage ligue-1">
            <div className="each-league-title">Ligue 1<br/>nhảy múa cùng bóng đá</div>
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
                    <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, Ligue1Product.length, setState)}}>
                        {loaded_product_number < Ligue1Product.length ? "Xem thêm" : "Ẩn bớt"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Ligue1;