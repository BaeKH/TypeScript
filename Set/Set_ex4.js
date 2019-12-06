let fruitSet = new Set();

fruitSet.add("Apple");
fruitSet.add("Melon");

var entryIter = fruitSet.entries();

for (let entry of entryIter) {
    console.log(entry);
}