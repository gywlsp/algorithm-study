const input = [];

const INF = 987654321;
let numList, memo;
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    numList = strToNumArr(input[1]);
    memo = [numList.shift()];

    numList.forEach((num) => {
      if (memo[memo.length - 1] < num) {
        memo.push(num);
        return;
      }
      memo[lowerBound(num)] = num;
    });

    console.log(memo.length);
  });

const lowerBound = (num) => {
  let start = 0,
    end = memo.length - 1,
    mid,
    result = INF;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (memo[mid] < num) {
      start = mid + 1;
      continue;
    }
    result = Math.min(result, mid);
    end = mid - 1;
  }
  return result;
};
