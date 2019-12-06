let fruitSet = new Set();

fruitSet.add("Apple");
fruitSet.add("Melon");

var KeyIter = fruitSet.keys();

for (let key of KeyIter) {
    console.log(key);
}