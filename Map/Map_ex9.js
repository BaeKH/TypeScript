let map = new Map();
map.set("Apple","red");
map.set("Melon","green");

var keyIter = map.keys();

for (var key of keyIter) {
    console.log(key);
}

