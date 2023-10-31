//Get Hand
let hand = prompt("Enter Your Hand, R | P | S");

//Generate Random Computer Hand 0-2
let computerHand = Math.floor(Math.random() * 3);
let computerHandString = "";

hand = hand.toLowerCase();

//Decode Multiple Hand Inputs Into A Standard
switch (hand) {
  //If Hand == R Rock or rock make it default Rock
  case "r":
  case "rock":
    hand = "Rock";
    break;

  //Same with p | Paper | paper
  case "p":
  case "paper":
    hand = "Paper";
    break;

  //Same with s | Scissors | scissors
  case "s":
  case "scissors":
    hand = "Scissors";
    break;

  //If none of these values no valid hand
  default:
    hand = "No Valid Hand Selected!";
    break;
}

//Swap Computer Hand From Number to String
switch (computerHand) {
  case 0:
    computerHandString = "Rock";
    break;

  case 1:
    computerHandString = "Paper";
    break;

  case 2:
    computerHandString = "Scissors";
    break;
}

const winDisplay = document.getElementById("winDisplay");

//Draw Condition
if (hand == computerHandString) {
  confirm(
    `You Choose ${hand} & The Computer Chose ${computerHandString}, It's A Draw!`
  );
  winDisplay.innerHTML = "Dogwater";
}

//Win Conditions
if (
  (hand == "Rock" && computerHandString == "Scissors") ||
  (hand == "Scissors" && computerHandString == "Paper") ||
  (hand == "Paper" && computerHandString == "Rock")
) {
  confirm(
    `You Choose ${hand} & The Computer Chose ${computerHandString}, You Win!`
  );
  winDisplay.innerHTML = "You WIn";
}

//Lose Conditions
if (
  (hand == "Rock" && computerHandString == "Paper") ||
  (hand == "Scissors" && computerHandString == "Rock") ||
  (hand == "Paper" && computerHandString == "Scissors")
) {
  confirm(
    `You Choose ${hand} & The Computer Chose ${computerHandString}, You Lose!`
  );
  winDisplay.innerHTML = "Loser Loser Chicken Bruiser";
}
