const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  // 입력 종료시 . 이 들어온다
  input.pop();
  return input
    .map((sentence) => {
      const array = [];
      for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char === '(' || char === '[') {
          array.push(char);
        } else if (char === ')') {
          const last = array.pop();
          if (last === '(') continue;
          else return 'no';
        } else if (char === ']') {
          const last = array.pop();
          if (last === '[') continue;
          else return 'no';
        }
      }
      return array.length === 0 ? 'yes' : 'no';
    })
    .join('\n');
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
