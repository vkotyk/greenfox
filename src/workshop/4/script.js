/*
 * 4. CONDITIONS
 *
 * EXCERCISE 1:
 * Draw 5 square below each other,
 * the middle one is going to be red,
 * rest of the are going to be blue.
 * Use a for-cycle and a condition
 *
 * See bottom right corner for more info
 *
 * HELP:
 * for (let i = 0; i < 5; i++) {

  }

  if(i === 3){
  
  }
 * c.fillStyle = "color";
 * c.fillRect(left, top, width, height);
 */

/*
 * Your code goes into this function
 */
// export function draw(c) {
//   let color = "blue";
//   if (color === "blue") {
//     c.fillStyle = color;
//     c.fillRect(20, 20, 200, 200);
//   }

//   let number = 5;
//   if (number > 10) {
//     c.fillStyle = color;
//     c.fillRect(220, 220, 200, 200);
//   }
// }

//FUNGUJE
// export function draw(c) {
//   let color = "blue";

//   let number = 10;
//   if(number<10){
//     c.fillStyle = color;
//     c.fillRect(220,220,200,200);
//    }else if(number>10){
//     c.fillStyle = "green";
//     c.fillRect(220,220,200,200);
//   } else{
//     c.fillStyle = "red";
//     c.fillRect(220, 220, 200, 200);
//   }
// }

//FUNGUJE
// export function draw(c) {
//   let offset = 20;
//   let size = 50;
//   for (let i = 0; i < 5; i++) {
//     c.strokeRect(offset + i * size, offset, size, size);
//   }
// }

//FUNGUJE
export function draw(c) {
  let size = 100;
  let gap = 5;
  for (let i = 0; i < 5; i++) {
    c.fillStyle = "black";
    if (i === 2) {
      c.fillStyle = "red";
    }
    c.fillRect(20, 20 + i * (size + gap), size, size);
  }
}
