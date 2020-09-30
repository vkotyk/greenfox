export function draw(c) {
  // Here we are creating function for drawing foxes
  function drawFox(x, y) {
    var size = 20;

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + (size / 7) * 2, y - (size / 7) * 3);
    c.lineTo(x + (size / 7) * 3, y - size / 7);
    c.lineTo(x + (size / 7) * 4, y - size / 7);
    c.lineTo(x + (size / 7) * 5, y - (size / 7) * 3);
    c.lineTo(x + size, y);
    c.lineTo(x + size / 2, y + (size / 7) * 3);
    c.lineTo(x, y);
    c.fill();
  }

  // This function returns value from 0 to 255 we are using build-in Math object and its random function - this is similar to when we call for example c.fillRect()
  function getRandomColor() {
    return Math.random() * 255;
  }

  // We are selecting a canvas element from HTML
  let canvas = window.document.getElementById("canvas");

  // Here, we are adding event listener on mousemove
  canvas.addEventListener("mousemove", function (e) {
    c.fillStyle =
      "rgb(" +
      getRandomColor() +
      "," +
      getRandomColor() +
      "," +
      getRandomColor() +
      ")";
    drawFox(e.clientX, e.clientY);
  });
}
