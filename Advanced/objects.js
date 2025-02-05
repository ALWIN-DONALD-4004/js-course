// // objects are a way to store data in javascript in a format of key-value pair

// // eg : {fristname:'alwin',lastnaem:'Donald'}


// // Object also contains many build-in functions
// // Objects can be constructed using 2 ways
// // 1) Const preson = {}
// // 2) Const person = new Object();

// // -------------------------------------------------------------------------------

// // console.log('Objects !!')
// const person = {};
// person["fristname"] = "Alwin";
// person["secondname"] = "donald";

// person.age = 24;
// person.designation = "B.E"
// person.address = "tN"

// console.log(person);
// console.log(person.fristname + " " + person.secondname + " " +person.designation)

// // error 
// // const tname = "alwin"
// // tname = 23;


// const person1 = {fname:"alwin" , lname:"donald"}
// const person2 = {fname: "sengole",lname:"raj"}
// const personCollection = [person1,person2]
// console.log(personCollection)

// // ---------------------------------------------------------------------------------

// //Object Constructor

// const school = new Object();
// school.name = "IFet"
// school.grade = 'A';
// school.address = "TN"

// const school1 = new Object(null);
// console.log(school1)


//-------------------------------------------------------------------------------

// const person = {
//     name: "alwin",
//     place : "villupuram",
//     greed : function () {
//         return "Hello world"
//     }
// }
// console.log(person.greed())


const person = {
    name: "alwin",
    place : "villupuram",
    greed : function () {
        return this.name + " - " + "hello ... "   //this refers to th current object variable
    }
};
console.log(person.greed())


//old model for creating object constructor,

// function Person (fname , lname , age,connun){
//     this.fristname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.contactNumber = connun;
// }

// const p1 = Person("alwin","dionald",23,9600250499);
// console.log(p1.fristname)