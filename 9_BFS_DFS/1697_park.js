const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let answer = 0;
  const [n, k] = input.split(' ').map((v) => +v);

  if (n == k) return 0;

  const q = [[n]];
  const visited = new Array(100001).fill(1e9);

  visited[n] = 1;

  while (q.length) {
    answer += 1;
    const cur = q.shift();
    const arr = [];
    for (const num of cur) {
      const f = num + 1;
      const b = num - 1;
      const mul = num * 2;
      if (f == k || b == k || mul == k) {
        return answer;
      } else {
        if (visited[f] > visited[num] + 1) {
          visited[f] = visited[num] + 1;
          arr.push(f);
        }
        if (visited[b] > visited[num] + 1) {
          visited[b] = visited[num] + 1;
          arr.push(b);
        }
        if (visited[mul] > visited[num] + 1) {
          visited[mul] = visited[num] + 1;
          arr.push(mul);
        }
      }
    }
    if (arr.length) {
      q.push(arr);
    }
  }
};

rl.on('line', (answer) => {
  console.log(solution(answer));
  rl.close();
});
