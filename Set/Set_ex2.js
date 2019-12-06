let fruitSet = new Set();

fruitSet.add("Apple");
fruitSet.add("Melon");

console.log(fruitSet);

console.log(fruitSet.has("Apple"));

fruitSet.delete("Apple");
fruitSet.clear();

console.log(fruitSet.has("Apple"));
console.log(fruitSet.has("Melon"));

console.log(fruitSet);