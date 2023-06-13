console.log("Hello RPS!");



var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R", "P", "S"]

var humanChoice = prompt("Choose R, P, or S")
console.log(humanChoice)
var randomNum = Math.floor( Math.random() * 3)
console.log( choices[randomNum] )