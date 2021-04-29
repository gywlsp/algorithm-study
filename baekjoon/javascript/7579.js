const input = [];

const INF = 987654321;
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input[0]);
    const mList = strToNumArr(input[1]);
    const cList = strToNumArr(input[2]);
    mList.unshift(null);
    cList.unshift(null);

    const cSum = cList.reduce((acc, c) => acc + c, 0);
    const memo = [Array(cSum + 1).fill(0)];

    let result = INF;
    for (let n = 1; n <= N; n++) {
      memo.push(Array(cSum + 1).fill(0));
      for (let c = 0; c <= cSum; c++) {
        memo[n][c] =
          c < cList[n]
            ? memo[n - 1][c]
            : Math.max(memo[n - 1][c], memo[n - 1][c - cList[n]] + mList[n]);
        if (memo[n][c] >= M) {
          result = Math.min(result, c);
        }
      }
    }
    console.log(result);
  });
