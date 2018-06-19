// Bronswers have a JS engine
// It has a praser to make sure that the JS language is correct, it will break if any errors
// Converts to machine code, then the machine code runs
// Global excution context - code that is not inside function is run, - asscoaited with a global object - in the browser it is the windows object.

// 1) Creation phase a) creation of the variable object takes palce b) creation of the scope chain c) this variable is determiend 
//2) Execution phase the code of the function that generated is run line by line (executed)


// Section 3: Hoisting ------

// Code is scanned for function delcarations: for each declaration of a function, a property is created in the Variable Object pointing to the function. 
// Code is scanned for each variable a property is created in the Variable Object and set to undefined.

// Hoisting in Practice
// hoisting with functions
// calculateAge(1990);

// function calculateAge(year) {
//     console.log(2018 - year);
// }

//This will break since it is a function expression 
//retirement(1990);
// var retirement = function(year) {
//     console.log(65 - (2018 - year));
// }

//hoisting with variables 
// if varaible exists but is defined after the execution, then it will be undefiend, if age is removed all together, then it will error

console.log(age);
var age = 23;
///Todo age is never passed in as a parameter. so doing this will set age to undefined. 
function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

// Scoping in JavaScript------------

// var a = "Hello";
// first();

// function first() {
//     var b = "Hi";
//     second();

//     function second() {
//         var c = "Hey!";
//         third();

//     }
// }
// this only has access to a and d only way to change this is to pass in variables b and c.
// function third() {
//     var d = "John";
//     console.log(a + b + c + d);
// }

// This Lecture ---------

console.log(this);

calculateAge(1989);

function calculateAge(year) {
    console.log(2018 - year)
    console.log(this);
}

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
    }
}
john.calculateAge();