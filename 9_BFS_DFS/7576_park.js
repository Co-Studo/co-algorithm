const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  let answer = -1;

  const [nm, ...rest] = input;

  const [n, m] = nm.split(' ').map((v) => +v);
  const arr = rest.map((v) => v.split(' ').map((v) => +v));
  const starts = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let zeros = 0;

  // 1_000_000
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        starts.push([i, j]);
      } else if (arr[i][j] === 0) {
        zeros += 1;
      }
    }
  }

  if (zeros === 0) return 0;

  const q = [starts];
  while (q.length) {
    const tomatos = q.shift();

    for (const [t1, t2] of tomatos) {
      for (let i = 0; i < 4; i++) {
        const x = t1 + dx[i];
        const y = t2 + dy[i];
        if (x >= 0 && y >= 0 && x < m && y < n && arr[x][y] === 0) {
          arr[x][y] = arr[t1][t2] + 1;
          zeros -= 1;
          starts.push([x, y]);
          answer = Math.max(answer, arr[x][y]);
        }
      }
    }
  }

  return zeros === 0 ? answer - 1 : -1;
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
