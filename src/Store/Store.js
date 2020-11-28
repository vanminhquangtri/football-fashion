const redux = require("redux");
// currency and rate
const Currency = {
    currency: "đ",
    rate: 1
};
const Currency_reducer = (init = Currency, action) => {
    switch (action.type) {
        case "USD":
            return {
                ...init,
                currency: "$",
                rate: 1/23000
            }
        case "EUR":
            return {
                ...init,
                currency: "€",
                rate: 1/27000
            }
        default:
            return {
                ...init,
                currency: "đ",
                rate: 1
            }
    }
};
// shopping cart
const Cart = [];
var currentCart;
const Cart_reducer = (init = Cart, action) => {
    currentCart = [...init]
    switch (action.type) {
        case "ADD_TO_CART":
            // if id no exist => create new obj and push to Cart
            const result = currentCart.some((product, index) => {
                return product.product_id === action.id;
            });
            if (result === false) {
                var newAdded = {product_id: action.id, quantity: [{size: action.size, quantity: action.quantity}]}
                currentCart.push(newAdded);
            } else {
                // if id already exist, continue check size
                currentCart.forEach((product) => {
                    // find the product that have same id
                    if (product.product_id === action.id) {
                        // if size no exist => create new obj of size and quantity and push to current product 
                        const size_result = product.quantity.some((size_quantity) => {
                            return size_quantity.size === action.size
                        });
                        if (size_result === false) {
                            var newSize_Quantity = {size: action.size, quantity: action.quantity};
                            product.quantity.push(newSize_Quantity)
                        } else {
                            // if size already exist, plus quantity to current quantity
                            product.quantity.forEach((size_quantity) => {
                                if (size_quantity.size === action.size) {
                                    size_quantity.quantity += action.quantity
                                }
                            })
                        }
                    }
                })
            }
            return currentCart;
        case "REMOVE_FROM_CART":
            // find the product need to be removed
            const removedProducts = currentCart.find((product) => {
                return product.product_id === action.id;
            });
            // find the size need to be removed
            const removedSize = removedProducts.quantity.find((size_quantity) => {
                return size_quantity.size === action.size;
            });
            // remove the size from current product
            removedProducts.quantity.splice(removedProducts.quantity.indexOf(removedSize), 1);
            // remove whole product from cart if there's no size
            if (removedProducts.quantity.length === 0) {
                currentCart.splice(currentCart.indexOf(removedProducts), 1);
            }
            return currentCart;
        case "UPDATE_CART":     
            // find the product match id with action
            currentCart.forEach((product) => {
                if (product.product_id === action.id) {
                    // find quantity object match size with action
                    product.quantity.forEach((size_quantity) => {
                        if (size_quantity.size === action.size) {
                            size_quantity.quantity = action.quantity
                        }
                    })
                }
            });
            return currentCart;
        default:
            return currentCart;
    }
}
// separate product: in case user pay for the dislay product (component product detail) instead of add to cart
const SeparateProduct = [];
var currentSeparateProduct;
const SeparateProduct_reducer = (init = SeparateProduct, action) => {
    currentSeparateProduct = [...init];
    switch (action.type) {
        case "ADD_TO_SEPARATE_PRODUCT":
            currentSeparateProduct = [];
            currentSeparateProduct.push(action.paidProduct);
            return currentSeparateProduct;
        default:
            return currentSeparateProduct;
    }
}
// payment target (pay for product displayed in component DetailProduct or pay for whole Cart)
const PaymentTarget = {
    target: []
};
const PaymentTarget_reducer = (init = PaymentTarget, action) => {
    switch (action.type) {
        case "PAY_WHOLE_CART":
            return {
                ...init,
                target: currentCart,
            }
        case "PAY_SEPARATE":
        return {
            ...init,
            target: currentSeparateProduct,
        }   
        default:
            return init
    }
}
// order
const Orders = [];
const Orders_reducer = (init = Orders, action) => {
    switch (action.type) {
        case "ADD_TO_ORDER":
            init.push(action.order)
            return init
        default:
            return init
    }
}
// force to re-render the shopping cart (such as when click add to cart)
const Rerender = true;
const Rerender_reducer = (init = Rerender, action) => {
    var currentState = init;
    switch (action.type) {
        case "RE_RENDER":
            currentState = !init;
            return currentState;
        default:
           return init;
    }
}
const All_reducer = redux.combineReducers({
    Currency: Currency_reducer,
    Cart: Cart_reducer,
    PaymentTarget: PaymentTarget_reducer,
    SeparateProduct: SeparateProduct_reducer,
    Orders: Orders_reducer,
    Rerender: Rerender_reducer
});
var Store = redux.createStore(All_reducer);
export default Store;