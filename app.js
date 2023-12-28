const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const displayCurrentPlayer = document.querySelector("#current-player");
let currentPlayer = 1;

let onClickIt;
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener(
    "click",
    (onClickIt = () => {
      alert("You have clicked square " + i);
    })
  );
}
