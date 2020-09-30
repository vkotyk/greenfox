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
    localStorage.setItem("canvas3", canvas.toDataURL());
  }

  resizeCanvas();
})();

function drawExcercise(c, width, height) {
  /*EX 1*/
  let left = width - 200;
  let top = height - 40;
  let size = 20;
  c.fillStyle = "purple";
  c.fillRect(left + 0 * size, top, size, size);
  c.fillStyle = "crimson";
  c.fillRect(left + 1 * size, top, size, size);
  c.fillStyle = "salmon";
  c.fillRect(left + 2 * size, top, size, size);
  c.fillStyle = "forestGreen";
  c.fillRect(left + 3 * size, top, size, size);

  /*EX 2*/

  left += 120;
  top = height - 80;
  for (let i = 0; i < 5; i++) {
    c.fillStyle = "rgba(0, 0, 0, " + i * 0.2 + ")";
    c.strokeStyle = "red";
    c.fillRect(left + (i * size) / 2, top + (i * size) / 2, size, size);
    c.strokeRect(left + (i * size) / 2, top + (i * size) / 2, size, size);
  }

  c.fillStyle = "black";
  c.strokeStyle = "black";
}
