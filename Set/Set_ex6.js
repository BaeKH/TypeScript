let fruitSet = new Set();

fruitSet.add("Apple");
fruitSet.add("Melon");

fruitSet.forEach(function (value1, value2, set) {
    console.log(value1 + ":" + value2);
    console.log(set);
});