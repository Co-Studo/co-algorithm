const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  let answer = 0;
  const MX = 10000;
  const array = new Array(MX * 2 + 1).fill(0);
  let head = MX;
  let tail = MX;

  const [n, ...rest] = input;
  const result = [];
  rest.forEach((command) => {
    const [cmd, value] = command.split(' ');
    if (cmd === 'push_back') {
      array[tail] = value;
      tail += 1;
    } else if (cmd === 'push_front') {
      head -= 1;
      array[head] = value;
    } else if (cmd === 'pop_front') {
      result.push(head !== tail ? array[head++] : -1);
    } else if (cmd === 'pop_back') {
      result.push(head !== tail ? array[tail-- - 1] : -1);
    } else if (cmd === 'size') {
      result.push(tail - head);
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
