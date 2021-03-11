//https://www.acmicpc.net/problem/2193

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const memo = [null, [BigInt(0), BigInt(1)]];

    for (let n = 2; n <= N; n++) {
      memo.push([memo[n - 1][0] + memo[n - 1][1], memo[n - 1][0]]);
    }
    console.log(String(memo[N][0] + memo[N][1]));
  });
