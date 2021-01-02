//https://www.acmicpc.net/problem/2805

const input = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input[0]);
    const TREE_HEIGHTS = strToNumArr(input[1]).sort((a, b) => b - a);
    let max = TREE_HEIGHTS[0];
    let min = max - M > 0? max - M : 0;
    while (true) {
      if (max - 1 === min || N === 1) break;
      let temp = Math.floor((max + min) / 2);
      let i = 0;
      let sum = 0;
      do {
        sum += TREE_HEIGHTS[i] - temp;
        i++;
      } while (i < N && sum < M && TREE_HEIGHTS[i] > temp);
      if(sum < M) max = temp;
      else min = temp;
      }
    console.log(min);
  });
