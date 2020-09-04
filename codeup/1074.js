//https://codeup.kr/problem.php?id=1074

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const n = Number(input[0]);
    [...Array(n)].forEach((_, i) => console.log(n - i));
  });
