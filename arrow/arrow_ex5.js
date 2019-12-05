const cale = {
    firstNumber:100,
    secondNumber:20,
    print:function(){

        let self = this;
        function add() {
            console.log(self);

            return self.firstNumber + self.secondNumber;
        }

        console.log(this.firstNumber +"+" +this.secondNumber + " =" + add());
    }
}

cale.print();