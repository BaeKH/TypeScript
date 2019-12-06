function add (a,b,...args) {
    console.log(a,b,...args);

    let sum = a + b ;

    for (let i =0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

let sum = add(1,2,3,4,5);

console.log(sum);