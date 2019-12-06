class Coffee {
    constructor() {
        this.name = "Americano";
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    display () {
        console.log(this.name);
    }
}

let coffee = new Coffee();

console.log(coffee.name);

console.log(coffee.getName());

coffee.display();