var myVar = "global" ; // global variable

function checkscope(){
    var myVar = "local" // local variable
    console.log(myVar)
}

console.log(myVar)
checkscope();