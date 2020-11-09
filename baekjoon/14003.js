//https://www.acmicpc.net/problem/14003

const input = [];
let lis = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

const getLisIndex = (num, start, end) => {
  if (start >= end) return end;
  const pivot = Math.floor((start + end) / 2);
  if (num > lis[pivot]) return getLisIndex(num, pivot + 1, end);
  else return getLisIndex(num, start, pivot);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const NUM_LIST = strToNumArr(input[1]);
    const indexList = [];
    const result = [];

    NUM_LIST.forEach((num) => {
      if (indexList.length === 0 || num > lis[lis.length - 1]) {
        indexList.push(lis.length);
        lis.push(num);
      } else {
        const index = getLisIndex(num, 0, lis.length - 1);
        indexList.push(index);
        lis[index] = num;
      }
    });

    console.log(lis.length);
    let n = lis.length - 1;
    let t = N - 1;

    while (t >= 0 && n >= 0) {
      if (indexList[t] === n) {
        result.unshift(NUM_LIST[t]);
        n--;
      }
      t--;
    }

    console.log(result.join(" "));
  });
