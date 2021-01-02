//https://codeup.kr/problem.php?id=1035

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(parseInt(input[0], 16).toString(8));
  });
