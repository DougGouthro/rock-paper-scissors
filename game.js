console.log("Hello RPS!");



var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R", "P", "S"]

var keepPlaying = true

while (keepPlaying) {
    var humanChoice = prompt("Choose R, P, or S")
    console.log(humanChoice)
    var randomNum = Math.floor( Math.random() * 3)
    var computerChoice = choices[randomNum]

    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)

    if (
        humanChoice === "S" && computerChoice === "P" ||
        humanChoice === "R" && computerChoice === "S" || 
        humanChoice === "P" && computerChoice === "R"  
    ) {
        alert("You won!")
        wins++

    } else if (humanChoice === computerChoice) {
        alert("Round tied")
        ties++

    } else {
        alert("You lost!")
        losses++

    }
    alert("Wins: " + wins + "\nTies:" + ties + "\nLosses:" + losses)
    keepPlaying = confirm("Do you want to play again?")
}


