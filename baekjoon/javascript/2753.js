//https://www.acmicpc.net/problem/2753

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const num = +input[0];
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
