function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = null;
    switch(randomInt) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Scissors"
            break;
        default:
            console.log("error in switch statement")
    }
    return computerChoice;
}

function updateChoiceDisplay(choice, choiceElement) {
   choiceElement.textContent = choice;
   switch(choice) {
      case "rock":
         choiceElement.style.color =  "#7AA18E";
         break;
      case "paper":
         choiceElement.style.color =  "#B69835";
         break;
      case "scissors":
         choiceElement.style.color =  "#E65D2F";
         break;
      default:
         console.log("ERROR in updateChoiceDisplay")
         break;
   }
}

function playRound(playerChoice) {
   playerChoice = playerChoice.toLowerCase();
   computerChoice = computerPlay().toLowerCase();

   console.log(`player choice is: ${playerChoice}`);
   console.log(`computer choice is: ${computerChoice}`);

   const playerChoiceElement = document.getElementById("playerChoice");
   const computerChoiceElement = document.getElementById("computerChoice");
   updateChoiceDisplay(playerChoice, playerChoiceElement);
   updateChoiceDisplay(computerChoice, computerChoiceElement);

   if (playerChoice === computerChoice) {
      return `You tied! ${playerChoice} ties ${computerChoice}!`;
   }

   const playerScoreElement = document.getElementById("playerScore");
   const computerScoreElement = document.getElementById("computerScore");
   let playerScore = playerScoreElement.textContent;
   let computerScore = computerScoreElement.textContent;

   switch(playerChoice) {
      case "rock":
         if (computerChoice === "scissors") {
            playerScore++;
            playerScoreElement.textContent=playerScore;
            return 'You Win! Rock beats Scissors!'
         }
         else if (computerChoice ==="paper") {
            computerScore++;
            computerScoreElement.textContent=computerScore;
            return 'You Lose! Paper beats Rock!'
         }
         break;
        
      case "paper":
         if (computerChoice === "rock") {
            playerScore++;
            playerScoreElement.textContent=playerScore;
            return 'You Win! Paper beats Rock!'
         }
         else if (computerChoice ==="scissors") {
            computerScore++;
            computerScoreElement.textContent=computerScore;
            return 'You Lose! Scissors beats Paper!'
         }
         break;

      case "scissors":
         if (computerChoice === "paper") {
            playerScore++;
            playerScoreElement.textContent=playerScore;
            return 'You Win! Scissors beats Paper!'
         }
         else if (computerChoice ==="rock") {
            computerScore++;
            computerScoreElement.textContent=computerScore;
            return 'You Lose! Rock beats Scissors!'
         }
         break;
   }
}


const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => {
   button.addEventListener("click", (e) => {
      const message = playRound(button.id);
      const messageBox = document.getElementById("messageBox");
      messageBox.textContent = message;
   });
});

