//https://www.acmicpc.net/problem/12865

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, K] = strToNumArr(input.shift());
    const items = input.map((str) => strToNumArr(str));
    items.unshift(null);

    const memo = [Array(K + 1).fill(0)];
    for (let n = 1; n <= N; n++) {
      memo.push(Array(K + 1).fill(0));
      const [weight, value] = items[n];
      for (let j = 0; j <= K; j++) {
        memo[n][j] =
          j < weight
            ? memo[n - 1][j]
            : Math.max(memo[n - 1][j], memo[n - 1][j - weight] + value);
      }
    }

    console.log(memo[N][K]);
  });
