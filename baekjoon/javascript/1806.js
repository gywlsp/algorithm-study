const input = [];
const INF = 987654321;
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, S] = strToNumArr(input[0]);
    const numList = strToNumArr(input[1]);
    let minLen = INF;
    let intervalSum = 0,
      left = 0,
      right = 0;
    for (left; left < N; left++) {
      while (intervalSum < S && right < N) {
        intervalSum += numList[right++];
      }
      if (intervalSum >= S) {
        minLen = Math.min(minLen, right - left);
      }
      intervalSum -= numList[left];
    }
    console.log(minLen === INF ? 0 : minLen);
  });
