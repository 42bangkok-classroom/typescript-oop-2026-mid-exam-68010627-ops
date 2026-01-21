// Write your code below
const score = process.argv[2];

if (score === undefined || score.trim() === "") {
  console.log("Invalid input");
} else {
  const point = Number(score);

  if (Number.isNaN(point) || point < 0 || point > 100) {
    console.log("Invalid input");
  } else if (point >= 80) console.log("Grade is A");
  else if (point >= 70) console.log("Grade is B");
  else if (point >= 60) console.log("Grade is C");
  else if (point >= 50) console.log("Grade is D");
  else console.log("Grade is F");
}