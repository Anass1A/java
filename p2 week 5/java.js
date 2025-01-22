let startTime;
let endTime;
let scores = [];
const gameArea = document.getElementById("game-area");
const goButton = document.getElementById("go-button");
const resultText = document.getElementById("result");
const averageText = document.getElementById("average");
const scoreList = document.getElementById("score-list");
const topScores = document.getElementById("top-scores");

// Gemiddelde reactietijd van een mens (in milliseconden)
const averageReactionTime = 273;

goButton.addEventListener("click", startGame);

function startGame() {
    goButton.classList.add("hidden");
    resultText.textContent = "";
    gameArea.style.backgroundColor = "red";
    gameArea.classList.remove("hidden");

    // Wacht een willekeurige tijd tussen 1 en 10 seconden
    const randomDelay = Math.random() * 9000 + 1000;
    setTimeout(() => {
        gameArea.style.backgroundColor = "green";
        startTime = new Date().getTime();

        gameArea.addEventListener("click", recordReactionTime, { once: true });
    }, randomDelay);
}

function recordReactionTime() {
    endTime = new Date().getTime();
    const reactionTime = endTime - startTime;

    // Resultaat weergeven
    resultText.textContent = `Je reactietijd was ${reactionTime} milliseconden.`;
    averageText.textContent =
        reactionTime < averageReactionTime
            ? "Sneller dan het gemiddelde!"
            : "Langzamer dan het gemiddelde.";

    // Score opslaan
    scores.push(reactionTime);
    scores.sort((a, b) => a - b);
    if (scores.length > 5) scores.pop(); // Alleen top 5 scores bewaren
    updateScoreList();

    // Voorbereiden voor volgende ronde
    gameArea.classList.add("hidden");
    goButton.classList.remove("hidden");
}

function updateScoreList() {
    scoreList.innerHTML = ""; // Oude scores verwijderen
    scores.forEach((score, index) => {
        const li = document.createElement("li");
        li.textContent = `${score} ms`;
        scoreList.appendChild(li);
    });

    topScores.classList.remove("hidden");
}
