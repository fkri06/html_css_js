const btn = document.getElementById("clickBtn");
const gameStatus = document.querySelector(".game-status");

function getRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

btn.addEventListener("click", () => {
    const firstDiceNum = getRandomNumber();
    const secondDiceNum = getRandomNumber();

    let dices = document.querySelectorAll(".player img");

    dices[0].src = `./images/dice${firstDiceNum}.png`;
    dices[1].src = `./images/dice${secondDiceNum}.png`;

    if (firstDiceNum > secondDiceNum) {
        gameStatus.firstElementChild.textContent = "Player 1 Win 👏";
    } else if (secondDiceNum > firstDiceNum) {
        gameStatus.firstElementChild.textContent = "Player 2 Win 👏";
    } else {
        gameStatus.firstElementChild.textContent = "👏 Ties 👏";
    }
})