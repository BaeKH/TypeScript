const LINE = Symbol("line");
const RECTANGLE = Symbol("rectangle");

console.log(LINE.toString());

console.log(RECTANGLE.toString());

let shape = LINE;

if (shape === LINE) {
    console.log("shape === LINE");
} else {
    console.log("shape !== LINE");
}