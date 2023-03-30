const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  let answer = 0;
  const arr = [];
  for (let i = 0; i < input[0].length; i++) {
    const char = input[0][i];
    if (char === '(') {
      arr.push({ lazer: 0 });
    } else if (char === ')') {
      const last = arr.pop();
      if (last.lazer === 0) {
        arr.forEach((acc) => (acc.lazer += 1));
      } else {
        answer += last.lazer + 1;
      }
    }
  }
  return answer;
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
