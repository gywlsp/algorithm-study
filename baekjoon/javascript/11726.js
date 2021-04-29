//https://www.acmicpc.net/problem/11726

const input = [];
const memo = [0, 1, 2, ...Array(998)];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    console.log(getFillMethodCount(N));
  });

const getFillMethodCount = (n) => {
  if (n < 1) {
    return 0;
  }
  if (memo[n]) {
    return memo[n];
  }

  memo[n] = (getFillMethodCount(n - 1) + getFillMethodCount(n - 2)) % 10007;
  return memo[n];
};
