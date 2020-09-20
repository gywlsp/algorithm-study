//https://www.acmicpc.net/problem/10815

const input = [];
let numList = undefined;

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

const binarySearch = (num, startIndex, endIndex) => {
  if (endIndex < startIndex) return false;
  if (endIndex === startIndex) return num === numList[startIndex];

  const pivotIndex = Math.floor((endIndex + startIndex) / 2);
  if (num === numList[pivotIndex]) return true;
  else if (num > numList[pivotIndex])
    return binarySearch(num, pivotIndex + 1, endIndex);
  else if (num < numList[pivotIndex])
    return binarySearch(num, startIndex, pivotIndex - 1);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const numListFinalIndex = Number(input[0]) - 1;
    numList = strToNumArr(input[1]).sort((a, b) => a - b);
    const searchNumList = strToNumArr(input[3]);

    const result = searchNumList.reduce(
      (acc, curr) =>
        (acc += `${binarySearch(curr, 0, numListFinalIndex) ? 1 : 0} `),
      ""
    );
    console.log(result);
  });
