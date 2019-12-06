class Coffee{
    constructor(){
        this.name = "Coffee";
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    display(){
        console.log(this.name);
    }

    toString() {
        throw new Error("You have to implement the method doSomething!");
    }
}

let coffee = new Coffee();

console.log(coffee.name);

console.log(coffee.getName());

coffee.display();

class Espresso extends Coffee {
    constructor() {
        super();
    }

    toString() {
        return "test";
    }
}

let espresso = new Espresso();

espresso.setName("Espresso");

console.log(espresso.name);

console.log(espresso.getName());

espresso.display();

console.log(espresso.toString());