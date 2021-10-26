var apple = displayPrice('🍎', 500);
var grape = displayPrice('🍇', 2000, 200);
function displayPrice(fruit, oriPrice, salePrice) {
    var price = salePrice ? oriPrice - salePrice : oriPrice;
    return {
        name: fruit,
        price: price > 0 ? price : 0
    };
}
console.log(apple); //yoshi sir, hello
console.log(grape);
