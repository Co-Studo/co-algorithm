const fs = require("fs");
const [n, ...testCases] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let data = [-1];
let prev = [-1];
let next = [-1];
let unused = 1;
let cursor = 0;

const init = () => {
  data = [-1];
  prev = [-1];
  next = [-1];
  unused = 1;
  cursor = 0;
};

const traverse = () => {
  let cur = next[0];
  let resultStr = "";
  while (cur != -1) {
    resultStr += data[cur];
    cur = next[cur];
  }
  return resultStr;
};

const insert = (addr, text) => {
  data[unused] = text;
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

const runCommand = (command) => {
  switch (command) {
    case "<":
      if (prev[cursor] !== -1) {
        cursor = prev[cursor];
      }
      break;
    case ">":
      if (next[cursor] !== -1) {
        cursor = next[cursor];
      }
      break;
    case "-":
      if (cursor !== 0) {
        cursor = erase(cursor);
      }
      break;
    default:
      cursor = insert(cursor, command);
      break;
  }
};

const solution = () => {
  testCases.forEach((testCase) => {
    init(testCase);

    for (const command of testCase) {
      runCommand(command);
    }

    console.log(traverse());
  });
};

solution();
