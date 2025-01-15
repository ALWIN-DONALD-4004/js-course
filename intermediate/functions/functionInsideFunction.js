function provideNumbers1(number1){
   return function provideNumber2(number2){
        return parseInt(number1) + parseInt(number2);
    }
}

const result = provideNumbers1(10);
const finalresult = result(20);
console.log(finalresult)