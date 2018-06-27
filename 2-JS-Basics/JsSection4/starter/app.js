/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var player1Turn = true;
var player1Score = 0;
var player2Score = 0;
var rollButton = document.querySelector(".btn-roll");
var holdButton = document.querySelector(".btn-hold");
var newButton = document.querySelector(".btn-new");
var playerCurrentScore = document.querySelectorAll('.active .player-current-score');
rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", saveScore);
newButton.addEventListener("click", newGame);

function rollDice() {
    var playerCurrentScore = document.querySelector('.active .player-current-score');
    var rollResult = Math.floor((Math.random() * 6) + 1);
    changeRollImage(rollResult);
    if (rollResult === 1) {
        playerCurrentScore.innerHTML = "0";
        var totalScore = document.querySelector(".active .player-score");
        totalScore.innerHTML = "0";
        changePlayerTurn();
    } else {
        var currentScore = parseInt(playerCurrentScore.innerHTML);
        currentScore += rollResult;
        playerCurrentScore.innerHTML = currentScore;
    }
};

function changeRollImage(rollResult) {
    var image = document.querySelector(".dice");
    image.src = `dice-${rollResult}.png`;
};

function changePlayerTurn() {
    var player1Panel = document.querySelector(".player-0-panel");
    var player2Panel = document.querySelector(".player-1-panel");
    if (player1Panel.classList.contains("active")) {
        player1Panel.classList.remove("active");
        player2Panel.classList.add("active");
    } else {
        player2Panel.classList.remove("active");
        player1Panel.classList.add("active");
    }
};

function saveScore() {
    var currentScore = document.querySelector(".active .player-current-score");
    var totalScore = document.querySelector(".active .player-score");
    var parsedCurrentScore = parseInt(currentScore.innerHTML);
    var parsedTotalScore = parseInt(totalScore.innerHTML);
    totalScore.innerHTML = parsedCurrentScore + parsedTotalScore;
    if (parsedCurrentScore + parsedTotalScore >= 100) {
        var currnetPlayer = document.querySelector(".active .player-name");
        alert(`${currnetPlayer.innerHTML} has won the game with a score of ${totalScore.innerHTML}! To play again click "New Game"`)
        rollButton.disabled = true;
        holdButton.disabled = true;
    } else {
        currentScore.innerHTML = "0";
        changePlayerTurn();
    }
};

function newGame() {
    var currentScores = document.querySelectorAll(".player-current-score");
    var totalScores = document.querySelectorAll(".player-score");
    currentScores.forEach(function(element) {
        element.innerHTML = "0";
    });
    totalScores.forEach(function(element) {
        element.innerHTML = "0";
    });
    if (!document.querySelector(".player-0-panel").classList.contains("active")) {
        changePlayerTurn();
    }
};