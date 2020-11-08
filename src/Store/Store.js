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
    switch (action.type) {
        case "ADD_TO_CART":
            for (let i = 0; i < action.quantity; i ++){
                init.push(action.id)
            }
            return init;
        default:
            return init;
    }
}
const All_reducer = redux.combineReducers({
    Currency: Currency_reducer,
    Cart: Cart_reducer
});
const Store = redux.createStore(All_reducer);
export default Store;