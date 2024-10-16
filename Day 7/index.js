let num = [1, 2, 3, 4, 45, 5, 45];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// let evennum = num.filter((s) => s % 2 == 0);
// console.log(evennum);

// let sum = num.reduce((x, y) => x + y, 0);
// console.log(sum);

const students = [
  { name: "Alice", score: 50 },
  { name: "Adam", score: 41 },
  { name: "Avia", score: 32 },
  { name: "Vidsa", score: 43 },
  { name: "Sandy", score: 50 },
  { name: "Alion", score: 23 },
];

let scores = students.map(x=>x.score);
let sumscores = scores.reduce((x,y)=>x+y,0);
let s=students.map((x)=>x.score).reduce((x,y)=>x+y,0);
console.log(s);
console.log(sumscores);
console.log(scores);

