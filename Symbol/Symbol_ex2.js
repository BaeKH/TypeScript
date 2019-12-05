const LINE = Symbol("line");
const RECTANGLE = Symbol("rectangle");

if (LINE === RECTANGLE) {
    console.log("LINE === RECTANGLE");
} else {
    console.log("LINE !== RECTANGLE");
}