var fullname = "alwin donald";



function greed(){
    var fullname = "alwin 123"
    var age = 24;
    console.log(fullname)
}

function greed2(){
    fullname = "chan";
    console.log(fullname)
   // console.log(age)
}

// greed();
// greed2();
// greed();


function num1(number1){
    const result = number1*2;
    function num2 (){
        return result*3;
    }
    const resp = num2();
    console.log(resp);
}

num1(10)
