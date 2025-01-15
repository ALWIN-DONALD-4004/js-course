//ES5

function great(name = "coder"){
    console.log("hello "+ name )
}

great("Alwin");
great("chan");
great();


// with return value

function chectForvalidAge(age){
    return age>18?true:false
}

var person1 = chectForvalidAge(23);
console.log(person1)

var person2 = chectForvalidAge(13);
console.log(person2) 


// Anonymous Function

var test = function(marks){
    return marks>=50 ? "Pass" : "Fail"
}

console.log(test(42))