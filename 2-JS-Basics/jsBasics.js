// --- Lecture: Variables 
// var name = "John";
// var lastName = "Smith";
// var age = 27;
// console.log(name + " " + lastName);
// console.log(age);

// var fullAge = false;

// --- Lecture: Variables 2

// var name = "Rob Reynolds";
// var age = 28;
// console.log(name +" " + age)
// console.log(age.toString() + age);

// var job, isMarried;
// job = "teacher";
// isMarried = true;
// console.log(job + ' ' + isMarried);

// //--- Lecture 3: Operators 
// var currentYear = 2016

// var birthYear = currentYear - age;
// birthYear = currentYear - 26 * 2 + 11;
// console.log(birthYear);



// ------ Lecture if else statements 
// var name = 'John';
// var age = 26;
// var isMarried = false;

// if(isMarried){
//     console.log(name + ' is married');
// } else {
//     console.log(name + ' will hopfully be married soon!');
// }

// if(23 ==='23'){
//     console.log("Example of type conversion");
// }

// ----------Lecture: Switch and boolean logic
// var job = prompt("What is your job");

// switch (job) {
//     case 'teacher':
//         console.log("I am a teacher");
//         break;
//     case 'software developer':
//         console.log("yep")
//         break;
//     default:
//         console.log("yes!");
// }

// -----------Lecture Functions
// function calculateAge(yearOfBirth) {
//     return 2018 - yearOfBirth;
// }
// var ageRebecca = calculateAge(1989);
// var ageRob = calculateAge(1990);
// console.log(ageRebecca);
// console.log(ageRob);

// //function to calculate how many year until retuirement 

// function yearsUntilRetierement(name, yearOfBirth) {
//     var age = calculateAge(yearOfBirth);
//     var yearToRetire = 65 - age;
//     yearToRetire >= 0 ? console.log(`${name} you have ${yearToRetire} years until you can retire.`) : console.log(`${name} you can retire.`);
// }
// yearsUntilRetierement("John", 1950);

// Lecutre: Statements and Expressions

// function statement just delcares the function to be called
// function someFun(par) {
//     //code
// }
// //function expression, stores the value returned by a function as a varaible that can be useds
// var someFun = function(par) {
//     //code
// }

// //Expressions
// 3 + 4;
// var x = 3;

// //statements 
// if (x === 5) {
//     // do something
// }

// /////////////////////////////////
// // ----- Arrays 

// var people = {
//     jon: { name: 'John', age: 50 },
//     peter: { name: 'Peter', age: 20, job: 'teacher', color: 'red' },
// };
// console.log(people.peter);

// var rob = ["Rob", "Reynolds", "software developer", "red", ]

// console.log(rob.indexOf("red"));

// if (rob.indexOf('teacher') !== -1) {
//     console.log(`${rob[0]} is a teacher.`);
// } else {
//     console.log(`${rob[0]} is not a teacher.`);
// }

// -------Objects **Most important paert of js ------
// var array = [1, 2, 3];
// console.log(array[0]);
// var objectLiteral = {
//     name: "Rob",
//     lastName: "Reynolds",
//     yearOfBirth: 1990,
//     job: "teacher",
//     isMarried: true
// };
// console.log(objectLiteral.lastName);
// console.log(objectLiteral['lastName']);
// var xyz = 'job';
// console.log(objectLiteral[xyz]);

// // data mutation 

// objectLiteral.job = 'software developer';
// console.log(objectLiteral);

// var rebecca = new Object();
// rebecca.name = 'Rebecca';
// rebecca.age = 29;
// rebecca.job = 'teacher';
// console.log(rebecca);

//------Object Methods------------
var rob = {
    name: 'Rob',
    lastName: 'Reynolds',
    yearOfBirth: 1990,
    job: 'developer',
    isMarried: true,
    family: ['Rebecca', 'Harley'],
    calculateAge: function(yearOfBirth) {
        var year = new Date().getFullYear();
        return year - yearOfBirth;
    }
}
console.log(rob.calculateAge(rob.yearOfBirth));