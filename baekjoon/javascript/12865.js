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
    items.unshift(undefined);

    const memo = [];
    for (let i = 0; i <= N; i++) {
      memo.push(Array(K + 1).fill(0));
    }

    for (let i = 1; i <= N; i++) {
      const [weight, value] = items[i];
      for (let j = 0; j <= K; j++) {
        if (j < weight) {
          memo[i][j] = memo[i - 1][j];
        } else {
          memo[i][j] = Math.max(
            memo[i - 1][j],
            memo[i - 1][j - weight] + value
          );
        }
      }
    }

    console.log(memo[N][K]);
  });
