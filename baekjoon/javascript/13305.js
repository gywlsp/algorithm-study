//https://www.acmicpc.net/problem/13305

const input = [];

const strToNumArr = (str) => str.split(" ").map(BigInt);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const wArr = strToNumArr(input[1]);
    const vArr = strToNumArr(input[2]);
    let min = 9876543210n;
    const result = wArr
      .reduce((acc, w, i) => {
        if (vArr[i] < min) {
          min = vArr[i];
        }
        return acc + w * min;
      }, 0n)
      .toString();
    console.log(result);
  });
