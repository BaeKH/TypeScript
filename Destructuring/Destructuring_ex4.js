let coffee = {
    name : "Americano",
    price : 30000
};

let { name:coffeeName, caffenine:coffeeCaffeine = 500} = coffee;

console.log(coffeeName);
console.log(coffeeCaffeine);