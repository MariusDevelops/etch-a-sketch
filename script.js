/* Create a webpage with a 16x16 grid of square divs. */
function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove()); // remove empty squares
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    /* Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. */
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = "black")
    );
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

/* Add a button that will change number of squares per side for the new grid. */
function changeSize(input) {
  populateBoard(input);
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("too many squares");
  }
}
