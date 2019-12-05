const calc = {
    firstNumber : 100,
    secondNumber :20,
    Print : function () {
        const add = () => {
            console.log(this);

            return this.firstNumber + this.secondNumber;
        }

        console.log(this.firstNumber + "+" + this.secondNumber + "=" + add());
    }
}

calc.Print();