//https://www.acmicpc.net/problem/2231

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    let result = 0;
    for (let n = 1; n <= N; n++) {
      let num = n,
        remainder;
      let divideSum = num;
      while (num !== 0) {
        remainder = num % 10;
        divideSum += remainder;
        num = Math.floor(num/10);
      }
      if (divideSum === N) {
        result = n;
        break;
      }
    }
    console.log(result);
  });
