const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString();

const arraySolution = (word) => {
  const arr = new Array(26).fill(0);
  for (const alphabet of word) {
    arr[alphabet.charCodeAt() - 97]++;
  }
  return arr.join(" ");
};

console.log(arraySolution(word));
