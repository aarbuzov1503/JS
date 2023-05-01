let n = -3;
let m = -10;

let range = Math.abs(m - n);

  let numberInRange = Math.round(
  Math.random() * range);

let max = Math.max(n, m);

console.log("Минимальное число", max - numberInRange);
console.log( "Маскимальное число", numberInRange);

console.log("Числа равны", (max + numberInRange) === numberInRange);
console.log("Первое число больше", (max + numberInRange) > numberInRange);
console.log("Первое число меньше", (max + numberInRange) < numberInRange);
console.log("Первое число не равно", (max + numberInRange) !== numberInRange);
console.log("Первое число больше или равно", (max + numberInRange) >= numberInRange);
