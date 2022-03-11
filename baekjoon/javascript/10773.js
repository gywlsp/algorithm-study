//https://www.acmicpc.net/problem/10773

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const n = +input[0];
    const numbers = [];
    for (let i = 1; i <= n; i++) {
      const curr = +input[i];
      if (curr) {
        numbers.push(curr);
        continue;
      }
      numbers.pop();
    }
    const result = numbers.reduce((prev, curr) => prev + curr, 0);
    console.log(result);
  });
