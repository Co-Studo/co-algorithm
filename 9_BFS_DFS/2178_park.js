const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  const [nm, ...rest] = input;

  const [n, m] = nm.split(' ').map((v) => +v);
  const arr = rest.map((v) => v.split('').map((v) => +v));

  const visited = new Array(n).fill(0).map((v) => new Array(m).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (start) => {
    const q = [start];
    visited[start[0]][start[1]] = 1;

    while (q.length) {
      const [a, b] = q.shift();

      for (let i = 0; i < 4; i++) {
        const x = a + dx[i];
        const y = b + dy[i];

        if (
          x >= 0 &&
          y >= 0 &&
          x < n &&
          y < m &&
          visited[x][y] === 0 &&
          arr[x][y] !== 0
        ) {
          visited[x][y] = 1;
          arr[x][y] = arr[a][b] + 1;
          q.push([x, y]);
        }
      }
    }
  };

  bfs([0, 0]);

  return arr[n - 1][m - 1];
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
