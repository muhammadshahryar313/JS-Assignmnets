// Chap 9-10
// Q1

// var city = prompt("Write the name of city");
// if (city === "Karachi"){
//     alert("Welcome to city of lights");



// Q2
// var gender = prompt("Enter your gender");

// if (gender === "male") {
//   alert("Good Morning Sir");
// } else if (gender === "female") {
//   alert("Good Morning Ma'am");
// }


// Q3
// var color = prompt("Enter the color of the road traffic signal (red, yellow, green): ");

// if (color === "red") {
//   alert("Stop");
// } else if (color === "yellow") {
//   alert("Get ready to stop");
// } else if (color === "green") {
//   alert("Go");
// } else {
//   alert("Invalid input. Please enter either 'red', 'yellow', or 'green'.");
// }


// Q4
// var remainingFuel = +prompt("Enter the remaining fuel in your car:");

// if (remainingFuel < 2) {
//   alert("Please refill the fuel in your car");
// }


// Q5


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }



// if("car" < "cat"){
// alert("car is smaller than cat");
// }



// Q6


// var marks1 = +prompt("Enter marks in subject 1: ");
// var marks2 = +prompt("Enter marks in subject 2: ");
// var marks3 = +prompt("Enter marks in subject 3: ");
// var totalMarks = +prompt("Enter total marks: ");

// var percentage = (marks1 + marks2 + marks3) / totalMarks * 100;
// document.write("Percentage: " + percentage + "%");

// if (percentage >= 80) {
//   document.write("<br>Grade: A");
// } else if (percentage >= 60) {
//   document.write("<br>Grade: B");
// } else if (percentage >= 40) {
//   document.write("<br>Grade: C");
// } else {
//   document.write("<br>Grade: D");
// }

// Q7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (ranging from 1 to 10):"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (Math.abs(userGuess - secretNumber) <= 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Incorrect answer. The secret number was " + secretNumber);
// }

// Q8

// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");

// }

// Q9

// var num = 4;

// if (num % 2 === 0) {
//   console.log(`${num} is an even number.`);
// } else {
//   console.log(`${num} is an odd number.`);
// }

// Q10
// var temperature = 35;

// if (temperature > 40) {
//   console.log("It is too hot outside.");
// } else if (temperature > 30) {
//   console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//   console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   console.log("OMG! Today’s weather is so Cool.");
// } else {
//   console.log("Invalid temperature");
// }

// Q11
// var calculator = (num1, num2, operator) => {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else if (operator === "%") {
//     return num1 % num2;
//   } else {
//     return "Invalid operator";
//   }
// };

// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// var operator = prompt("Enter operator (+, -, *, /, %):");

// alert(calculator(num1, num2, operator));

// Chapter 12-13
//  Q1
