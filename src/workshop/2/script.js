/*
 * 2. VARIABLES
 *
 * EXCERCISE 1:
 * Try to draw a stairs.
 * Every stair is a square 100 by 100.
 * Try to use variables and operators.
 * For more info see bottom right corner.
 *
 * HELP:
 * let size = 100;
 * c.fillRect(left, top, width, height);
 *
 */

/*
 * Your code goes into this function
 */
export function draw(c) {
  let left = 20;
  let top = 20;
  let size = 50;
  c.fillStyle = "rgb(255,0,0)";
  c.fillRect(left + 0 * size, top + 0 * size, size, size);
  c.fillStyle = "rgb(0,255,0)";
  c.fillRect(left + 1 * size, top + 1 * size, size, size);
  c.fillStyle = "rgb(0,0,255)";
  c.fillRect(left + 2 * size, top + 2 * size, size, size);
}
