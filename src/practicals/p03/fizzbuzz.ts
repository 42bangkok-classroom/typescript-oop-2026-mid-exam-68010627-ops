// Write your code below
const n: number = parseFloat(process.argv[2]);
if(isNaN(n)|| n < 1 ||!Number.isInteger(n)){
    console.log("Invalid Input");
}
else{
    for(let i = 1;i<=n;i++){
        if(i % 3 ===0 && i % 5 ===0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log(`${i}`);
        }
        }
    }