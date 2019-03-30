class Calculator{
    constructor(figure1, figure2){
        this.figure1 = figure1;
        this.figure2 = figure2;
    }
    //lets add d num
    addition(){
        let add = this.figure1 + this.figure2;
        return add;
    }
// lets subtract
    subtraction(){
        let subtract = this.figure1 - this.figure2;
        return subtract;
    }
}
//instantiate
const result = new Calculator(300, 300)
console.log(result);
console.log(result.subtraction());
console.log(result.addition());
