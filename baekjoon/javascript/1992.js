//https://www.acmicpc.net/problem/1992

const input = [];
const quadTree = [];

const strToNumArr = (str) => str.split("").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = input.shift();
    input.forEach((str) => quadTree.push(strToNumArr(str)));
    console.log(getExpression(0, N - 1, 0, N - 1));
  });

const getExpression = (rStart, rEnd, cStart, cEnd) => {
  if (rStart === rEnd && cStart === cEnd) {
    return quadTree[rStart][cStart];
  }
  const value = quadTree[rStart][cStart];
  let divideMore = false;
  for (let r = rStart; r <= rEnd; r++) {
    for (let c = cStart; c <= cEnd; c++) {
      if (quadTree[r][c] !== value) {
        divideMore = true;
        break;
      }
    }
  }

  if (!divideMore) {
    return value;
  }

  let result = "";
  nextQuadSize = (rEnd - rStart + 1) / 2;
  const rMid = rStart + nextQuadSize - 1;
  const cMid = cStart + nextQuadSize - 1;
  result += getExpression(rStart, rMid, cStart, cMid);
  result += getExpression(rStart, rMid, cMid + 1, cEnd);
  result += getExpression(rMid + 1, rEnd, cStart, cMid);
  result += getExpression(rMid + 1, rEnd, cMid + 1, cEnd);
  return "(" + result + ")";
};
