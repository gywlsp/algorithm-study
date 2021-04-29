//https://www.acmicpc.net/problem/1158

const input = [];
const result = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, K] = strToNumArr(input[0]);

    const numList = [...Array(N)].map((_, i) => i + 1);
    let indexArrow = 0;
    const interval = K - 1;

    while (numList.length !== 0) {
      indexArrow = (indexArrow + interval) % numList.length;
      result.push(numList[indexArrow]);
      numList.splice(indexArrow, 1);
    }

    console.log(`<${result.join(", ")}>`);
  });
