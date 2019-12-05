const calc = {
    firstNumber : 100,
    secondNumber :20,
    Print : function () {
        let self = this;
        function add () {
            console.log(this);

            return self.firstNumber + this.secondNumber;
        }

        console.log(this.firstNumber + "+" + this.secondNumber + "=" + add());
    }
}

calc.Print();s