// Write your code below

// const input = +process.argv[2];
// if (Number.isNaN(input) || input <= 0) {
// //   process.exit()
// }
// let result = '';
// for(let i = 0; i <= input; i++) {
//     for (let k = input - i; k > 0; k--) {
//         result += ' '
//     }
//     for (let j = i; j > 0; j--) {
//         result += (`${j}`)
//     }
//     result += '\n'
// }
// console.log(result)

// const input = +process.argv[2];
// if (Number.isNaN(input) || input <= 0) {
//   process.exit()
// }
// for(let i = 0; i < input; i++) {
//   let result = '';
//   for (let k = input - i - 1; k > 0; k--) {
//     result += ' '
//   }
//   for (let j = 0; j < input; j++) {
//     result += '*'
//   }
//   console.log(result)
// }

// const input = +process.argv[2];
// if (Number.isNaN(input) || input <= 0) {
//   process.exit()
// }
// let result = '';
// for(let i = 0; i <= input; i++) {
//   for (let j = i; j > 0; j--) {
//     result += j
//   }
//   result += '\n'
// }
// console.log(result)

const input = +process.argv[2];
if (Number.isNaN(input) || input <= 0) {
//   process.exit()
}
for(let i = 0; i <= input; i++) {
    let result = '';
    for (let k = input - i; k > 0; k--) {
        result += ' '
    }
    for (let j = i; j > 0; j--) {
        result += (`${j}`)
    }
    console.log(result)
}