const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [a, b, c] = input.split(" ").map((v) => BigInt(v));

  const pow = (a, b, c) => {
    if (b === BigInt(1)) return a % c;
    let val = pow(a, BigInt(parseInt(b / BigInt(2))), c);
    val = (val * val) % c;
    if (b % BigInt(2) == BigInt(0)) return val;
    return (val * a) % c;
  };
  return Number(pow(a, b, c));
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
