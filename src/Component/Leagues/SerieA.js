import React, {useState} from "react";
import ProductsInfo from "../../Data/ProductInfo";
import LoadProducts from "../GeneralModules/LoadProducts";
import ProductLayout from "../Products/ProductLayout/ProductLayout";

const SerieA = (props) => {
    const [state, setState] = useState({
        loaded_product_number: 6
    });
    const {loaded_product_number} = state;
    const SerieAProduct = ProductsInfo.filter((product) => {
        return product.league === "Serie A";
    });
    let loadedProducts = [];
    SerieAProduct.forEach((product) => {
        if (loadedProducts.length < loaded_product_number) {
            loadedProducts.push(product)
        }
    })
    return (
        <div className="leage serie-a">
            <div className="each-league-title">Seria A<br/>sàn đấu của những nghệ sĩ sân cỏ</div>
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
                    <button className="load-btn" onClick={(ev)=>{LoadProducts(ev, loaded_product_number, SerieAProduct.length, setState)}}>
                        {loaded_product_number < SerieAProduct.length ? "Xem thêm" : "Ẩn bớt"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SerieA;