let map = new Map([["Apple","red"],["Melon","green"]]);

var valueIter = map.values();

for (var value of valueIter) {
    console.log(value);
}