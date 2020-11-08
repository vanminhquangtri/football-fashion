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
const All_reducer = redux.combineReducers({
    Currency: Currency_reducer
});
const Store = redux.createStore(All_reducer);
export default Store;