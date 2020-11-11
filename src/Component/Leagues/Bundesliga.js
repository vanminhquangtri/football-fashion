import React, {useState} from "react";
import ProductsInfo from "../../Data/ProductInfo";
import LoadProducts from "../GeneralModules/LoadProducts";
import ProductLayout from "../Products/ProductLayout/ProductLayout";

const Bundesliga = (props) => {
    const [state, setState] = useState({
        loaded_product_number: 4
    });
    const {loaded_product_number} = state;
    const bundesligaProduct = ProductsInfo.filter((product) => {
        return product.league === "Bundes Liga";
    });
    let loadedProducts = [];
    bundesligaProduct.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    })
    return (
        <div className="leage bundes-liga">
            <div className="each-league-title">Bundes Liga<br/>sức mạnh cổ xe tăng</div>
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
                    <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, bundesligaProduct.length, setState)}}>
                        {loaded_product_number < bundesligaProduct.length ? "Xem thêm" : "Ẩn bớt"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bundesliga;