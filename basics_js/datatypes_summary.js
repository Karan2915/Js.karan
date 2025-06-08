// Primitive Data Types
// types- String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score=100
const scoreValue=100.3

const isloggedin=true
const outsideTemp= null
let userEmail;

const Id = Symbol("123");
const anotherId = Symbol("123");
//console.log(Id === anotherId);


//Reference Data Types(Non-Primitives)
// types- Object, Array, Function, Map, Set, WeakMap, WeakSet

const heros = ["shaktiman", "rama", "arjun", "krishna", "jai", "kamal"]
let myObj = {
    name: "karan",
    age: 25,
    address: {
        city: "mumbai",
        state: "maharashtra",
        country: "india"
    }
}
const myFunction = function () {
    console.log("hello world")
}
//console.log(myFunction)

//stack(Primitives)
//heap(Reference Data Types)

let myYoutubename= "Karan"
let otherName= myYoutubename
otherName="Dhoni"

//console.log(myYoutubename)
//console.log(otherName)

let userOne = {
    email: "karan@gmail.com",
    upi: "1234567890",
}
let UserTwo = userOne
UserTwo.email = "kk29156506@gmail.com"
console.log(userOne)
console.log(UserTwo)