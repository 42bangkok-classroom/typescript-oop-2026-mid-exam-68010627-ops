// Write your code below
const input = +process.argv[2];
if (Number.isNaN(input) || input <= 0) {
    // process.exit(0);
}
for(let i = 1; i <= input; i++) {
    let result = '';
    for (let k = input - i; k > 0; k--) {
        result += ' '
    }
    for (let j = i; j > 0; j--) {
        result += j
    }
    console.log(result)
}