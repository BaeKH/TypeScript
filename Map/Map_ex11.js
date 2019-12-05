let map = new Map([["Apple","red"],["Melon","green"]]);

var valueIter = map.entries();

for (var endtry of valueIter) {
    console.log(endtry);
}