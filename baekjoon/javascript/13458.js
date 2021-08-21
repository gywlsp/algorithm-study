//https://www.acmicpc.net/problem/13458

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input[0];
    const A_ARR = strToNumArr(input[1]);
    const [B, C] = strToNumArr(input[2]);
    let result = 0;
    A_ARR.forEach((a) => {
      a -= B;
      let needCnt = 1;
      while (a > 0) {
        a -= C;
        needCnt++;
      }
      result += needCnt;
    });
    console.log(result);
  });
