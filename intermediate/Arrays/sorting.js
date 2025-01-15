//sorting and concatinate

const fruis = ["orange","mango","apple","kiwi"]
fruis.sort();
console.log(fruis)
fruis.reverse();
console.log(fruis)

const axis = [22.2,12.9,1,231,100.45];
axis.sort(function (a,b){
    return a-b;
});

console.log(axis)


const num1 = [1,2,3]
const num2 = [4,5,6]

// const result = num1+num2;
// console.log(result)

console.log(num1.concat(num2));


//splicing and slicing

//splice() => add new items
//slice() => slice out a piece of an array

const numbers = [1,2,3,4,5]
// numbers.splice(5,0,6,7,8);
// numbers.splice(1,1)

// const z = numbers.slice(3)
const z = numbers.slice(1,6)

console.log(z)

