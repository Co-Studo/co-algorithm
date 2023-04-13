const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  let answer = 0;
  const [nm, ...rest] = input;
  const [N, M] = nm.split(' ').map((v) => +v);
  const nums = rest.map((v) => +v);

  nums.sort((a, b) => a - b);

  let front = 0;
  let back = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val - nums[front] >= M) {
      answer = val - nums[front];
      back = i;
      break;
    }
  }

  for (let j = 0; j < nums.length * 2; j++) {
    if (back == nums.length) break;
    if (front >= back) {
      back++;
      continue;
    }
    if (nums[back] - nums[front] >= M) {
      answer = Math.min(answer, nums[back] - nums[front]);
      front++;
      continue;
    } else {
      back++;
    }
  }

  return answer;
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
