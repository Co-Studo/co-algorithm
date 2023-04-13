const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  const [ns, rest] = input;
  const [n, s] = ns.split(' ').map((v) => +v);
  const arr = rest.split(' ').map((v) => +v);

  let answer = 1e9;
  let first = 0;
  let back = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length * 2; i++) {
    if (sum < s) {
      sum += arr[back];
      back++;
      count++;
    } else if (sum >= s) {
      sum -= arr[first];
      first++;
      count--;
    }

    if (sum >= s) {
      answer = Math.min(answer, count);
    }
  }

  return answer === 1e9 ? 0 : answer;
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
