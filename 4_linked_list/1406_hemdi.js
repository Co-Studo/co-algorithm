const fs = require("fs");
const [str, n, ...commands] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const data = [-1];
const prev = [-1];
const next = [-1];

let unused = 1;
let cursor = str.length;

const traverse = () => {
  let cur = next[0];
  let resultStr = "";
  while (cur != -1) {
    resultStr += data[cur];
    cur = next[cur];
  }
  return resultStr;
};

const insert = (addr, num) => {
  data[unused] = num;
  prev[unused] = addr;
  next[unused] = next[addr];

  if (next[addr] != -1) {
    prev[next[addr]] = unused;
  }

  next[addr] = unused;
  unused++;

  return unused - 1;
};

const erase = (addr) => {
  next[prev[addr]] = next[addr];
  if (next[addr] != -1) prev[next[addr]] = prev[addr];

  return prev[addr];
};

const runCommand = (command, word) => {
  switch (command) {
    case "L":
      if (prev[cursor] !== -1) {
        cursor = prev[cursor];
      }
      break;
    case "D":
      if (next[cursor] !== -1) {
        cursor = next[cursor];
      }
      break;
    case "B":
      if (cursor !== 0) {
        cursor = erase(cursor);
      }
      break;
    case "P":
      cursor = insert(cursor, word);
      break;
  }
};

const solution = () => {
  for (let i = 0; i < str.length; i++) {
    insert(i, str[i]);
  }

  commands.forEach((value) => {
    const [command, word] = value.split(" ");
    runCommand(command, word);
  });

  console.log(traverse());
};

solution();
