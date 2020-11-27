const AddProductToLocalStorage = (id, size, quantity) => {
    var oldItems = JSON.parse(localStorage.getItem('productID')) || [];
    var newItem = {
        product_id: id,
        size: size,
        quantity: quantity
    };
    oldItems.push(newItem);
    localStorage.setItem('productID', JSON.stringify(oldItems));
};
export default AddProductToLocalStorage;