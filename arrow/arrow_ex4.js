const cale = {
    firstNumber:100,
    secondNumber:20,
    print:function(){
        console.log(this);

        function add() {
            //전역 객체를 가리킨다
            console.log(this);

            return this.firstNumber + this.secondNumber;
        }

        console.log(this.firstNumber +"+" +this.secondNumber + " =" + add());
    }
}

cale.print();