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
    localStorage.setItem("canvas2", canvas.toDataURL());
  }

  resizeCanvas();
})();

function drawExcercise(c, width, height) {
  let left = width - 120;
  let top = height - 120;
  let size = 20;
  for (let i = 0; i < 5; i++) {
    c.fillRect(left + i * size, top + i * size, size, size);
  }

  c.fillStyle = "black";
  c.strokeStyle = "black";
}
