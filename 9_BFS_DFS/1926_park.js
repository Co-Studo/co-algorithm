const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  const [nm, ...rest] = input;

  const pos = rest.map((r) => r.split(' ').map(Number));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const xLen = pos.length;
  const yLen = pos[0].length;
  const visited = new Array(xLen).fill(0).map(() => new Array(yLen).fill(0));
  let paintCount = 0;
  let maxPaint = 0;

  const bfs = (start) => {
    visited[start[0]][start[1]] = 1;
    const q = [start];
    let count = 1;

    while (q.length) {
      const [a, b] = q.shift();
      for (let i = 0; i < 4; i++) {
        const x = a + dx[i];
        const y = b + dy[i];
        if (x >= 0 && x < xLen && y >= 0 && y < yLen && pos[x][y] === 1) {
          if (visited[x][y] === 0) {
            visited[x][y] = 1;
            count += 1;
            q.push([x, y]);
          }
        }
      }
    }
    maxPaint = Math.max(maxPaint, count);
  };

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (visited[i][j] === 0 && pos[i][j] === 1) {
        paintCount += 1;
        bfs([i, j]);
      }
    }
  }
  return [paintCount, maxPaint].join('\n');
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
