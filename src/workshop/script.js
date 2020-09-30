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
export function draw(c) {
  let number = 25;
  let color = "rgb(" + 10 * number + "," + 5 * number + ",0)";
  c.fillStyle = color;
  c.fillRect(20, 20, 200, 200);
}
