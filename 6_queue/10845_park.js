const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, ...rest] = input;
  const array = [];
  const result = [];
  let head = 0;
  let tail = 0;
  rest.forEach((command) => {
    const [cmd, value] = command.split(' ');
    if (cmd === 'push') {
      array.push(value);
      tail += 1;
    } else if (cmd === 'pop') {
      result.push(array[head] ? array[head] : -1);
      if (head < tail) {
        head += 1;
      }
    } else if (cmd === 'size') {
      result.push(head !== tail ? tail - head : 0);
    } else if (cmd === 'empty') {
      result.push(head === tail ? 1 : 0);
    } else if (cmd === 'front') {
      result.push(head !== tail ? array[head] : -1);
    } else if (cmd === 'back') {
      result.push(head !== tail ? array[tail - 1] : -1);
    }
  });
  return result.join('\n');
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
