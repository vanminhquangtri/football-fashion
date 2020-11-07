function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// fortmat money (currency and operator and decimal)
// const showMoney = (currency, Product, quantity) => {
//     const value = formatNumber((Product.price * quantity * Currency.rate).toFixed(2));
//     switch (currency) {
//         case "USD":
//             return "$ " + value;

//         case "EUR":
//             return "€ " + value;

//         case "GBP":
//             return "£ " + value;

//         default:
//             return "$ " + value;
//     }
// }
export default formatNumber;