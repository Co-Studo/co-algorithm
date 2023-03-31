const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const solution = (input) => {
  let answer = 1;
  const [rc, ...rest] = input;
  const [r, c] = rc.split(' ').map((v) => +v);

  const arr = rest.map((r) => r.split(''));
  const firstJihoon = [];
  const firstFire = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (arr[i][j] === 'J') {
        firstJihoon.push([i, j]);
      } else if (arr[i][j] === 'F') {
        firstFire.push([i, j]);
      }
    }
  }

  let fires = [firstFire];
  let jihoons = [firstJihoon];

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (jihoons.length) {
    const jihoon = jihoons.shift();
    const newJihoon = [];

    for (const [j1, j2] of jihoon) {
      if (arr[j1][j2] !== 'J') continue;
      for (let i = 0; i < 4; i++) {
        const jx = j1 + dx[i];
        const jy = j2 + dy[i];

        if (jx >= 0 && jx < r && jy >= 0 && jy < c) {
          if (arr[jx][jy] === '.') {
            arr[jx][jy] = 'J';
            newJihoon.push([jx, jy]);
          }
        } else {
          return answer;
        }
      }
    }

    if (newJihoon.length) {
      answer += 1;
      jihoons.push(newJihoon);
    }

    if (fires.length) {
      const fire = fires.shift();
      const newFire = [];

      for (const [f1, f2] of fire) {
        for (let i = 0; i < 4; i++) {
          const fx = f1 + dx[i];
          const fy = f2 + dy[i];

          if (fx >= 0 && fx < r && fy >= 0 && fy < c) {
            if (arr[fx][fy] === '.') {
              arr[fx][fy] = 'F';
              newFire.push([fx, fy]);
            } else if (arr[fx][fy] === 'J') {
              arr[fx][fy] = 'F';
              newFire.push([fx, fy]);
            }
          }
        }
      }
      if (newFire.length) {
        fires.push(newFire);
      }
    }
  }

  return 'IMPOSSIBLE';
};

rl.on('line', (answer) => {
  input.push(answer.trim());
}).on('close', () => {
  console.log(solution(input));
});
