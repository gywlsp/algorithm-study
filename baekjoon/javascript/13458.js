//https://www.acmicpc.net/problem/13458

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const A_ARR = strToNumArr(input[1]);
    const [B, C] = strToNumArr(input[2]);
    const memo = Array(1000001).fill(1);
    for (let i = B + 1; i <= 1000000; i++) {
      memo[i] = (memo[i - C] || 1) + 1;
    }
    const result = A_ARR.reduce((acc, curr) => acc + memo[curr], 0);
    console.log(result);
  });
