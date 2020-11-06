const LoadProducts = function(ev, current_number, maximum_number, action) {
    ev.preventDefault();
    // increase 4 product each time click
    let new_number = current_number + 4;
    // if current loaded_product_number is already maximum, set new_number to be 8
    if (current_number === maximum_number) {
        new_number = 8;
    } else 
    // if new_number is more than the number of length of top viewed products array, set it to be length of top viewed products array
    if (new_number > maximum_number) {
        new_number = maximum_number
    }
    // set state
    action((prevState) => {
        return {
            ...prevState,
            loaded_product_number: new_number
        }
    })
}
export default LoadProducts;