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
    const N = Number(input[0]);
    numList = strToNumArr(input[1]);
    memo = [];
    const posList = [...Array(N)];

    numList.forEach((num, index) => {
      if ((memo[memo.length - 1] || 0) < num) {
        memo.push(num);
        posList[index] = memo.length;
        return;
      }
      const pos = lowerBound(num);
      memo[pos] = num;
      posList[index] = pos + 1;
    });

    let len = memo.length;
    console.log(len);

    const result = [];
    for (let i = posList.length - 1; i >= 0; i--) {
      if (posList[i] === len) {
        result.unshift(numList[i]);
        len--;
      }
      if (len === 0) {
        break;
      }
    }
    console.log(result.join(" "));
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
