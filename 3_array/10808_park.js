const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const alps = new Array(26).fill(0);
  const word = input[0];

  for (let i = 0; i < word.length; i++) {
    const idx = word[i].charCodeAt() - 97;
    alps[idx] += 1;
  }
  return alps.join(' ');
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
