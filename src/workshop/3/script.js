/*
 * 3. COLORS
 *
 * EXCERCISE 1:
 * Now as you learnt how colors work in JS
 * try to create 4 rectangles with these colors:
 * - purple
 * - crimson
 * - salmon
 * - forrest green
 *
 * Don't use just these names of the colors,
 * try to recreate them using the RGB code.
 * You can see the color in bottom right corner.
 * How close can you get?
 *
 *
 *
 * HELP:
 * purple = 50% red + 50% blue
 * c.fillStyle = "color";
 * c.fillRect(left, top, width, height);
 *
 * EXCERCISE 2:
 * Let's work on our stairs once more.
 * 5 stairs.
 * Squares are going to overlap in 1/4 of its area.
 * StrokeStyle should be red.
 * FillStyle should use RGBA - black color using alpha
 *
 * See the example in bottom right corner.
 *
 *
 * HELP:
 * rgb(0,0,0) = 'black'
 * c.fillStyle = "rgba(0, 0, 0, alpha)";
 * c.strokeStyle = 'red';
 * c.fillRect(left, top, width, height);
 * c.strokeRect(left, top, width, height);
 */

/*
 * Your code goes into this function
 */

//DOKONČIT
export function draw(c) {
  let left = 20;
  let top = 140;
  let size = 100;

  c.strokeStyle = "red";
  c.fillStyle = "rgba(0,0,0, " + 0 * 0.2 + ")";
  c.fillRect(left + (0 * size) / 2, top + (0 * size) / 2, size, size);
  c.strokeRect(left + (0 * size) / 2, top + (0 * size) / 2, size, size);

  c.strokeStyle = "red";
  c.fillStyle = "rgba(0,0,0, " + 1 * 0.2 + ")";
  c.fillRect(left + (1 * size) / 2, top + (1 * size) / 2, size, size);
  c.strokeRect(left + (1 * size) / 2, top + (1 * size) / 2, size, size);

  c.strokeStyle = "red";
  c.fillStyle = "rgba(0,0,0, " + 2 * 0.2 + ")";
  c.fillRect(left + (2 * size) / 2, top + (2 * size) / 2, size, size);
  c.strokeRect(left + (2 * size) / 2, top + (2 * size) / 2, size, size);

  c.strokeStyle = "red";
  c.fillStyle = "rgba(0,0,0, " + 3 * 0.2 + ")";
  c.fillRect(left + (3 * size) / 2, top + (3 * size) / 2, size, size);
  c.strokeRect(left + (3 * size) / 2, top + (3 * size) / 2, size, size);

  c.strokeStyle = "red";
  c.fillStyle = "rgba(0,0,0, " + 4 * 0.2 + ")";
  c.fillRect(left + (4 * size) / 2, top + (4 * size) / 2, size, size);
  c.strokeRect(left + (4 * size) / 2, top + (4 * size) / 2, size, size);
}
