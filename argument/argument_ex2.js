function add (...args) {
    console.log(args);

    let sum = 0;

    for (let i = 0; i<args.length; i++) {
        sum += args[i];
    }

    return sum;

}

let sum = add(1,2,3,4,5);

console.log(sum);