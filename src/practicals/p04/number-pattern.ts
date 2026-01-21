// Write your code below

const input = +process.argv[2];
if (Number.isNaN(input) || input <= 0) {
  process.exit()
}
let result = '';
for(let i = 0; i <= input; i++) {
  for (let j = i; j > 0; j--) {
    result += j
  }
  result += '\n'
}
console.log(result)

// const input = +process.argv[2];
// if (Number.isNaN(input) || input <= 0) {
//   process.exit()
// }
// let result = '';
// for(let i = input; i > 0; i--) {
//   for (let j = i-1; j > 0; j--) {
//     result += '*'
//     result += i
//   }
//   result += '\n'
// }
// console.log(result)

// const input = +process.argv[2];
// if (Number.isNaN(input) || input <= 0) {
//   process.exit()
// }
// let result = '';
// for(let i = input; i > 0; i--) {
//   for (let j = i; j > 0; j--) {
//     result += j
//   }
//   result += '\n'
// }
// console.log(result)

// 54321
// 4321
// 321
// 21
// 1

// const input = +process.argv[2];
// if (Number.isNaN(input) || input <= 0) {
//   process.exit()
// }
// for(let i = 0; i < input; i++) {
//   let result = '';
//   for (let j = 0; j <= i; j++) {
//     result += '*'
//   }
//   console.log(result)
// }

// *
// **
// ***
// ****
// *****