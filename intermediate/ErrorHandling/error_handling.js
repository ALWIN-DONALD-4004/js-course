//try 
//catch
//throw
//finaly

// var x=10;
// try{
//     if(x%2 === 0) {
//         console.log('fine number')
//     }
// }
// catch (err){
//     console.log(err)
// }

// var x=11;
// try{
//     x.toPrecision(500);
// }
// catch (err){
//     console.log(err.name)
// }

// var x=5;
// var y = 10;
// try{
//     x=z+1*2;
//     console.log(x);
// }
// catch (err){
//     throw err.name;
// } 

var x=5;
var y = 10;
try{
    x=z+1*2;
    console.log(x);
}
catch (err){
    console.log(err.name)
} 
finally{
    console.log("failed to convert")
}