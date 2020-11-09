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
const Cart_reducer = (init = Cart, action) => {
    const newAddedRequest = {product_id: action.id, size: action.size, quantity: action.quantity};
    switch (action.type) {
        case "ADD_TO_CART":
            init.push(newAddedRequest);
            return init;
        case "REMOVE_FROM_CART":
            const removedProducts = init.filter((product) => {
                return product.product_id === action.id
            });
            removedProducts.forEach((product) => {
                init.splice(init.indexOf(product), 1)
            })
            return init;
        default:
            return init;
    }
}
/* 
[
    {product_id: "", size: "S", quantity: "2"},
    {product_id: "", size: "M", quantity: "1"},
] 
*/
const All_reducer = redux.combineReducers({
    Currency: Currency_reducer,
    Cart: Cart_reducer
});
const Store = redux.createStore(All_reducer);
export default Store;