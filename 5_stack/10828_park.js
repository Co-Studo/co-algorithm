const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  let answer = [];

  const [n, ...rest] = input;
  const array = [];
  rest.forEach((command) => {
    const [cmd, value] = command.split(' ');
    if (cmd === 'push') {
      array.push(value);
    } else if (cmd === 'top') {
      if (array.length) {
        answer.push(array[array.length - 1]);
      } else {
        answer.push(-1);
      }
    } else if (cmd === 'size') {
      answer.push(array.length);
    } else if (cmd === 'pop') {
      if (array.length) {
        answer.push(array.pop());
      } else {
        answer.push(-1);
      }
    } else if (cmd === 'empty') {
      answer.push(array.length ? 0 : 1);
    }
  });
  return answer.join('\n');
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
