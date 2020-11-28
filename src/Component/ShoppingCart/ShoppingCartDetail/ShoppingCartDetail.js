// direct child of RouterURL, display all product add to shopping cart
import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import ShoppingCartDetailProduct from './ShoppingCartDetailProduct';
import ProductsInfo from '../../../Data/ProductInfo';
import Outstanding from '../../Products/ProductDetail/Outstanding/Outstanding';
import formatNumber from '../../GeneralModules/FortmatMoney'; 

const ShoppingCartDetail = (props) => {
    // get the list of product ID from local storage
    var storageProductId = [];
    if (window.localStorage.productID !== undefined) {
        storageProductId = JSON.parse(window.localStorage.productID);
    };
    // 1, get all ID from the LC
    var summarizedProductList = [];
    var LCIdList = [];
    storageProductId.forEach((item) => {
            if (LCIdList.indexOf(item.product_id) === -1) {
                LCIdList.push(item.product_id);
            }
        }
    );
    // 2, for each ID create an object with product_id property: [{product_id: id, size_quantity: []}]
    LCIdList.forEach((id) => {
            var obj = {
                product_id: id,
                size_quantity: []
            };
            summarizedProductList.push(obj)
        }
    );
    // 3, loop all item new array summarizedProductList, inside it loop each item in storageProductId 
    /*
        if match ID =>
        if size already exist, plus quantity to quantity
        else create new obj {size: size, quantity: quantity} and push to current item of summarizedProductList
    */
    summarizedProductList.forEach((item) => {
            storageProductId.forEach((product) => {
                if (item.product_id === product.product_id) {
                        const checkSizeExist = item.size_quantity.some((sq) => {
                            return sq.size === product.size  
                            }
                        );
                        if (checkSizeExist === false) {
                            var newSizeQuantity = {
                                size: product.size,
                                quantity: product.quantity
                            };
                            item.size_quantity.push(newSizeQuantity);
                        } 
                        else {
                            item.size_quantity.forEach((sq) => {
                                    if (sq.size === product.size) {
                                        sq.quantity += product.quantity;
                                    }
                                }
                            )
                        }
                    }
                }
            )
        }
    );
    // update local storage when press Update button  
    const updateLCProducts = (id, size, quantity) => {
        const currentLCProducts = JSON.parse(window.localStorage.productID);
        // calculate current quantity if passed size:
        var currentQuantity = 0;
        currentLCProducts.forEach((product) => {
                if (product.product_id === id && product.size === size) {
                    currentQuantity += product.quantity
                }
            }
        );
        var updatedObj = {
            product_id: id,
            size: size,
            quantity: quantity - currentQuantity
        };
        currentLCProducts.push(updatedObj);
        localStorage.setItem('productID', JSON.stringify(currentLCProducts)); 
    };
    const {Currency} = props.Store;
    const {dispatch} = props;
    // calculate total amount of shopping cart
    var totalAmount = 0;
    // loop each product in cart
    storageProductId.forEach((product) => {
        // get price of product
        var productPrice;
        ProductsInfo.forEach((p) => {
            if (p.id === product.product_id) {
                productPrice = p.price;
            }
        });
        // loop all quantity object of product, multiply product price with quantity and plus to totalAmount
        totalAmount += productPrice * product.quantity
    });
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
        document.title = "Giỏ hàng";
    },[])
    return (
        <section className="shopping-cart-detail">
            <div className="container-fluid">
                <div className="row title-wrapper">
                    <div className="col">
                        <div className="content">
                            Quản Lý Giỏ Hàng
                        </div>  
                    </div>
                </div>
                <div className="row product-detail-wrapper">
                    <div className="col">
                        <div className="content">
                            {/* render every product in shopping, each product is is row */}
                            {
                                (summarizedProductList.length === 0) && (
                                    <div className="empty-cart-announcement">
                                        <span>Bạn chưa có sản phẩm trong giỏ hàng, vui lòng thêm sản phẩm vào giỏ</span><br/>
                                        <NavLink to="/leagues">Chọn sản phẩm</NavLink>
                                    </div>
                                )
                            }
                            {
                                summarizedProductList.map((product) => {
                                    return <ShoppingCartDetailProduct 
                                            key={`shopping-cart-product-${product.product_id}`} 
                                            product={product}
                                            LCProducts={summarizedProductList}
                                            updateLCProducts={updateLCProducts}
                                        />
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* show total amount and link to check out */}
                {(storageProductId.length !== 0) && (
                    <div className="row checkout-wrapper">
                        <div className="col">
                            <div className="content">
                                <div className="total-amount">
                                    Tổng cộng: <strong>{formatNumber(totalAmount)}<sup>{Currency.currency}</sup></strong>
                                </div>
                                <div className="checkout-link">
                                    <NavLink to="/check-out" onClick={()=>{dispatch({type: "PAY_WHOLE_CART"})}}>
                                        Thanh toán
                                    </NavLink> <br/>
                                    <img alt="payment card" src={require("../../../Assets/images/section-shopping-cart-detail/payment-card.png").default}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Outstanding product={ProductsInfo[39]} key={`shopping-cart-outstanding${ProductsInfo[39].id}`}/>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetail)