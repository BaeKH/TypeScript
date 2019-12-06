class Coffee {
    constructor(name) {
        this._name = name;
    }

    get name () {
        console.log("call getter");
        return this._name;
    }

    set name (name) {
        console.log("call stter");
        this._name = name;
    }

    display() {
        console.log(this._name);
    }
}

let coffee = new Coffee("Americano");

console.log(coffee.name);

coffee.name = "Espresso";

console.log(coffee.name);

coffee.display();
