const apple = displayPrice('🍎', 500);
const grape = displayPrice('🍇', 2000, 200);

function displayPrice(fruit: string, oriPrice: number, salePrice?: number): { name: string; price: number } {
    const price = salePrice ? oriPrice - salePrice : oriPrice;
    return {
        name: fruit,
        price: price > 0 ? price : 0
    };
}

console.log(apple); //yoshi sir, hello
console.log(grape);
