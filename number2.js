// toString
// toExponential()
// toFixed()
// toPrecision()
// ValueOf()


var x = 20;
console.log(x);
console.log(x.toString())
console.log((120+80).toString());



var z = 9.492;
console.log(z);
console.log(z.toExponential(3));

console.log(z.toFixed(2));

var w = 9.744545453;
console.log(w.toPrecision(2)); // how many digits we want to display

console.log((20*12).valueOf());

var age = "33";
console.log(Number(age));

console.log(Number(new Date("2020-12-12")));

console.log(parseInt("24462576"));
console.log(parseFloat("34535.23535"));

console.log(Number(true))