const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [init, n, ...rest] = input;
  const array = Array.from(init);

  const right = [];
  rest.forEach((command) => {
    const [cmd, value] = command.split(' ');
    if (cmd === 'L' && array.length) {
      right.push(array.pop());
    } else if (cmd === 'D' && right.length) {
      array.push(right.pop());
    } else if (cmd === 'B') {
      array.pop();
    } else if (cmd === 'P') {
      array.push(value);
    }
  });

  return array.join('') + right.reverse().join('');
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
