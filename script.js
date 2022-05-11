/* Create a webpage with a 16x16 grid of square divs. */
let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(16 , 1fr)`;
board.style.gridTemplateRows = `repeat(16 , 1fr)`;

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.style.backgroundColor = "blue";
  board.insertAdjacentElement("beforeend", square);
}

/* Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. */

/* Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. */
