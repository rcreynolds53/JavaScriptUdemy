function calculateTotal(height, age) {
    if (typeof(height) === "string") {
        height = parseInt(height);
    }
    if (typeof(age) === "string") {
        age = parseInt(age);
    }
    return Number(height + age * 5);
}
var p1Name = prompt("What is your name player1?");
var p2Name = prompt("What is your name player 2?");
var p1Height = prompt("What is your height " + p1Name + "? Please enter a number.");
var p1Age = prompt("What is your age " + p1Name + "? Please enter a number.");
var p2Height = prompt("What is your height " + p2Name + "? Please enter a number.");
var p2Age = prompt("What is your age " + p2Name + "? Please enter a number.");

var p1Total = calculateTotal(p1Height, p1Age);
var p2Total = calculateTotal(p2Height, p2Age);

if (p1Total > p2Total) {
    console.log('Congragulations ' + p1Name + ' your total was ' + p1Total + ' you win!');
} else if (p2Total > p1Total) {
    console.log('Congragulations ' + p2Name + ' your total was ' + p3Total + ' you win!');
} else {
    console.log('Bummer ' + p1Name + ' and ' + p2Name + ' you guys both scored' + p1Total + ' you tied!');
}