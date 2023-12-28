const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const displayCurrentPlayer = document.querySelector("#current-player");
let currentPlayer = 1;

let clickIt;
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener(
    "click",
    (clickIt = () => {
      alert("You have clicked square " + i);
    })
  );
}
