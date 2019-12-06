function add(a,b = 10) {
    console.log("a = " + a);

    console.log("b = " + b);

    return a+b;
}

let sum = add(1);

console.log(sum);