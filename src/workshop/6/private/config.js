import { draw } from "../script";

(function () {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  // resize the canvas to fill browser window dynamically
  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    // Make it visually fill the positioned parent
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    drawExcercise(context, canvas.width, canvas.height);
    /*
     * Your drawings need to be inside this function otherwise they will be reset when
     * you resize the browser window and the canvas goes will be cleared.
     * This function is defined in script.js
     */
    draw(context);
    localStorage.setItem("canvas6", canvas.toDataURL());
  }

  resizeCanvas();
})();

function drawExcercise(c, width, height) {
  let left = width - 100;
  let top = height - 100;
  let size = 10;

  c.strokeRect(left, top, 80, 80);

  // Outside for loop serves as a counter loop for rows, each loop will create one row
  for (let i = 0; i < 8; i++) {
    // Inside loop serves for creating columns within the row
    for (let j = 0; j < 8; j++) {
      // If the column is odd AND row is even OR column is even and row is odd use white color else use black color
      if (((j % 2) + (i % 2)) % 2 === 0) {
        c.fillStyle = "white";
      } else {
        c.fillStyle = "black";
      }
      // Draw square with given color
      c.fillRect(left + i * size, top + j * size, size, size);
    }
  }

  c.fillStyle = "black";
  c.strokeStyle = "black";
}
