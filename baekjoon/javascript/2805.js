//https://www.acmicpc.net/problem/2805

const input = [];
let n,
  m,
  result = 0;
let tree_heights;

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [n, m] = strToNumArr(input[0]);
    tree_heights = strToNumArr(input[1]).sort((a, b) => b - a);
    const max = tree_heights[0];
    const min = max - m > 0 ? max - m : 0;

    binarySearch(min, max);
    console.log(result);
  });

const binarySearch = (min, max) => {
  if (max < min) {
    return;
  }

  const mid = Math.floor((max + min) / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const remain = tree_heights[i] - mid;
    if (remain <= 0 || sum >= m) {
      break;
    }
    sum += remain;
  }
  if (sum >= m) {
    result = Math.max(mid, result);
    return binarySearch(mid + 1, max);
  }
  return binarySearch(min, mid - 1);
};
