//https://www.acmicpc.net/problem/2579

const input = [];
let n, numbers, memo;

const solve = (i) => {
  if (i < 0) {
    return 0;
  }

  if (memo[i]) {
    return memo[i];
  }

  memo[i] = numbers[i] + Math.max(solve(i - 2), numbers[i - 1] + solve(i - 3));
  return memo[i];
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [n, ...numbers] = input.map((numString) => Number(numString));

    memo = [...Array(n)];
    memo[0] = numbers[0];

    console.log(solve(n - 1));
  });
