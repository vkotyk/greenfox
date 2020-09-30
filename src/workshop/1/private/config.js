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
    localStorage.setItem("canvas1", canvas.toDataURL());
  }

  resizeCanvas();
})();

function drawExcercise(c, width, height) {
  let left = width - 100;
  let top = height - 50;
  c.strokeStyle = "red";
  c.strokeRect(left, top, 20, 20);
  c.strokeStyle = "green";
  c.strokeRect(left + 20, top, 20, 20);
  c.strokeStyle = "blue";
  c.strokeRect(left + 40, top, 20, 20);

  c.fillStyle = "black";
  c.strokeStyle = "black";
}
