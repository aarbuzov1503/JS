let n = 100;
let m = -5;

let range = Math.abs(m - n);

  let numberInRange = Math.round(
  Math.random() * range);

let max = Math.max(n, m);
let resultMin = max - numberInRange;

let min = Math.min(n, m);
let resultMax = min + numberInRange;

console.log("Макс число", resultMax);
console.log("Минимальное число", resultMin);
console.log("Максимальное число", numberInRange);

//console.log("Числа равны", (max + numberInRange) === numberInRange);
//console.log("Первое число больше", (max + numberInRange) > numberInRange);
//console.log("Первое число меньше", (max + numberInRange) < numberInRange);
//console.log("Первое число не равно", (max + numberInRange) !== numberInRange);
//console.log("Первое число больше или равно", (max + numberInRange) >= numberInRange);
