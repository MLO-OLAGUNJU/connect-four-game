const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const displayCurrentPlayer = document.querySelector("#current-player");
let currentPlayer = 1;

for (let i = 0; i < squares.length; i++) {
  squares[i].onClick = () => {
    alert("You have clicked square " + i);
  };
}
