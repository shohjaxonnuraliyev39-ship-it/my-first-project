// const sum = function (a, b) {
//     return a + b
// }
// console.log (sum(22, 33))

// const add = (a, b) => {
//     return a + b
// }

// const add = (a, b) => a * b;
// console.log(add(22,33));

// let result = (function (a, b) {
//     return a + b;
// })(22,33)
// console.log(result)

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(100));


function sumTo(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum =sum * i;
  }
  return sum;
}
console.log(sumTo(5));