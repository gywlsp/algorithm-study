//https://www.acmicpc.net/problem/1541

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const result = input[0]
      .split("-")
      .map((str) => str.split("+").reduce((acc, curr) => acc + Number(curr), 0))
      .reduce((acc, curr) => acc - curr);

    console.log(result);
  });
